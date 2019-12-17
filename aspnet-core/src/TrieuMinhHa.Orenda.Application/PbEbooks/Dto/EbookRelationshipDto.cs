using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities.Auditing;
using System;
using TrieuMinhHa.Orenda.Authorization.EbookRelationship;

namespace TrieuMinhHa.Orenda.PbEbooks.Dto
{
    [AutoMap(typeof(PbClass))]
    public class PbClassListDto : FullAuditedEntity
    {
        public virtual string ClassGroup { get; set; }
        public virtual string ClassName { get; set; }
    }
    [AutoMap(typeof(PbPlace))]
    public class PbPlaceListDto : FullAuditedEntity
    {
        public virtual string PlaceGroup { get; set; }
        public virtual string PlaceName { get; set; }
    }
}
