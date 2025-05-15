using Newtonsoft.Json;
using System;

namespace TGC.AsgerThyregodDK.Functions.Models;

public class EmailACI
{
    [JsonProperty(PropertyName = "id")]
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }

    public string Message { get; set; }
    public DateTime Created { get; set; }

    public EmailACI(EmailRequestDTO emailRequestDTO)
    {
        this.Name = emailRequestDTO.Name;
        this.Email = emailRequestDTO.Email;
        this.Message = emailRequestDTO.Message;
        this.Created = DateTime.Now;
    }
}
