using AutoMapper;
using TMS.API.Controllers.Resources;
using TMS.API.Models;

namespace TMS.API.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Request, RequestResource>();
            CreateMap<RequestDetail, RequestDetailResource>();
            CreateMap<User, UserResource>();
        }
    }
}
