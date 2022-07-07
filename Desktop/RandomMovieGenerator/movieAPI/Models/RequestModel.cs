using System.Text.Json.Serialization;

namespace movieAPI.Models;

public class RequestModel
{
    [JsonPropertyName("name")]
    public string Name {get; set;}

    [JsonPropertyName("genre")]
    public string Genre {get; set;}
    [JsonPropertyName("imageUrl")]
    public string ImageUrl {get; set;}
}
