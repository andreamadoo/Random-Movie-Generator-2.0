using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using movieAPI.Data;
using movieAPI.Models;

namespace simpleAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class MovieController : ControllerBase
{

    private readonly SimpleContext _context; 
    public MovieController(SimpleContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult Get()
    {
       return Ok(_context.TableName);
    }
     [HttpPost]
    public async Task<IActionResult> Add(RequestModel request )
    {
        var simpleModel = new Movie() {Name = request.Name, Genre = request.Genre, ImageUrl = request.ImageUrl};
        _context.TableName.Add(simpleModel);
                await _context.SaveChangesAsync();
       return Ok(_context.TableName);
    }
    
}
