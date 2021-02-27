using System.Linq;
using API.DTOs;
using API.Entities;
using API.Extenstions;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<AppUser,MemberDTO>()
            .ForMember(dest => dest.PUrl,opt => opt.
            MapFrom(src => src.Photos.FirstOrDefault(x=>x.IsMain).PhotoUrl))
            .ForMember(dest => dest.Age,opt => opt.
            MapFrom(src => src.DateOfBirth.CalculateAge()));
            CreateMap<Photo,PhotoDTO>();
            CreateMap<MemberUpdateDTO,AppUser>();
            CreateMap<RegisterDTO,AppUser>();
            CreateMap<Message,MessageDTO>()
            .ForMember(dest => dest.SenderPhotoUrl,opt => opt.
            MapFrom(src => src.Sender.Photos.FirstOrDefault(x=>x.IsMain).PhotoUrl))
            .ForMember(dest => dest.RecipientPhotoUrl,opt => opt.
            MapFrom(src => src.Recipient.Photos.FirstOrDefault(x=>x.IsMain).PhotoUrl));
        }
    }
}