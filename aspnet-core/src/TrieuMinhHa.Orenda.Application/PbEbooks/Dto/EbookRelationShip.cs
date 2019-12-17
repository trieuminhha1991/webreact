using Abp.AutoMapper;
using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using TrieuMinhHa.Orenda.Authorization.EbookRelationship;

namespace TrieuMinhHa.Orenda.PbEbooks.Dto
{
    [AutoMap(typeof(PbClass))]
    public class ClassDto : Entity
    {
        public string ClassName;
        public string ClassGroup;
    }
    [AutoMap(typeof(PbRank))]
    public class RankDto: Entity
    {
        public string RankName;
    }
    [AutoMap(typeof(PbStatus))]
    public class StatusDto : Entity
    {
        public string StatusName;
    }
    [AutoMap(typeof(PbTypeEbook))]
    public class TypeBookDto : Entity
    {
        public string TypeName;
    }
    [AutoMap(typeof(PbTypeFile))]
    public class TypeFileDto : Entity
    {
        public string TypeFileName;
    }
}
