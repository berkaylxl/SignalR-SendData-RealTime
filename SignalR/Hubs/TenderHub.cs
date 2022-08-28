using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace SignalR.Hubs
{
    public class TenderHub:Hub
    {
        
        public async Task SendData(string message)
        {
            await Clients.All.SendAsync("SendDataJs",message);
        }


    }
}
