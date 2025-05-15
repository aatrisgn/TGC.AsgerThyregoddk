using Microsoft.Azure.Cosmos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using TGC.AsgerThyregodDK.Functions.Models;

namespace TGC.AsgerThyregodDK.Functions.Repositories
{
    public class AzureCosmosContext
    {
        private string EndpointUri;
        private string PrimaryKey;
        private CosmosClient cosmosClient;
        private Database database;
        private Container container;

        private string databaseId = "FamilyDatabase";
        private string containerId = "FamilyContainer";

        public AzureCosmosContext(string endpointUrl, string primaryKey)
        {
            EndpointUri = endpointUrl;
            PrimaryKey = primaryKey;
        }

        public async Task CreateClient()
        {
            this.cosmosClient = new CosmosClient(EndpointUri, PrimaryKey);
        }

        public async Task CreateDatabaseAsync()
        {
            this.database = await this.cosmosClient.CreateDatabaseIfNotExistsAsync(databaseId);
            Console.WriteLine("Created Database: {0}\n", this.database.Id);
        }

        public async Task CreateEmailACI(EmailACI emailACI)
        {
            try
            {
                // Read the item to see if it exists.  
                ItemResponse<EmailACI> emailResponse = await this.container.ReadItemAsync<EmailACI>(emailACI.Id.ToString(), new PartitionKey(emailACI.Email));
                Console.WriteLine("Item in database with id: {0} already exists\n", emailResponse.Resource.Id);
            }
            catch (CosmosException ex) when (ex.StatusCode == HttpStatusCode.NotFound)
            {
                // Create an item in the container representing the Andersen family. Note we provide the value of the partition key for this item, which is "Andersen"
                ItemResponse<EmailACI> andersenFamilyResponse = await this.container.CreateItemAsync<EmailACI>(emailACI, new PartitionKey(emailACI.Email));

                // Note that after creating the item, we can access the body of the item with the Resource property off the ItemResponse. We can also access the RequestCharge property to see the amount of RUs consumed on this request.
                Console.WriteLine("Created item in database with id: {0} Operation consumed {1} RUs.\n", andersenFamilyResponse.Resource.Id, andersenFamilyResponse.RequestCharge);
            }
        }
    }
}
