using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Microsoft.Azure.Cosmos;
using Microsoft.Extensions.Configuration;
using TGC.AsgerThyregodDK.Functions.Repositories;
using TGC.AsgerThyregodDK.Functions.Models;

namespace TGC.AsgerThyregodDK.Functions
{
    public static class CreateEmail
    {
        [FunctionName("CreateEmail")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req,
            ILogger log, ExecutionContext context)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(context.FunctionAppDirectory)
                .AddJsonFile("local.settings.json", optional: true, reloadOnChange: true)
                .AddEnvironmentVariables()
                .Build();

            var cosmosDBEndpoint = config["CosmosDB:EndpointUri"];
            var cosmosPrivateKey = config["CosmosDB:PrimaryKey"];

            var azureCosmosConstext = new AzureCosmosContext(cosmosDBEndpoint, cosmosPrivateKey);

            await azureCosmosConstext.CreateClient();
            await azureCosmosConstext.CreateDatabaseAsync();

            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            var emailRequestDTO = JsonConvert.DeserializeObject<EmailRequestDTO>(requestBody);

            var emailACI = new EmailACI(emailRequestDTO);

            //log.LogInformation("C# HTTP trigger function processed a request.");

            //string name = req.Query["name"];

            //string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            //dynamic data = JsonConvert.DeserializeObject(requestBody);
            //name = name ?? data?.name;

            //string responseMessage = string.IsNullOrEmpty(name)
            //    ? "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response."
            //    : $"Hello, {name}. This HTTP triggered function executed successfully.";

            //return new OkObjectResult(responseMessage);

            return new OkResult();
        }

        private static void AzureCosmosStuff()
        {
            
        } 
    }
}
