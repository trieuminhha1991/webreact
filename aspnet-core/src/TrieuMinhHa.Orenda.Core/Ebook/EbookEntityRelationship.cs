using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;

namespace TrieuMinhHa.Orenda.Authorization.EbookRelationship
{
    [Table("PbClasses")]
    public class PbClass : Entity
    {

        [Required]
        public virtual string ClassGroup { get; set; }

        public virtual string ClassName { get; set; }


    }
    [Table("PbPlaces")]
    public class PbPlace : Entity
    {

        [Required]
        public virtual string PlaceGroup { get; set; }

        public virtual string PlaceName { get; set; }

        public virtual string Description { get; set; }


    }
    [Table("PbRanks")]
    public class PbRank : Entity
    {

        [Required]
        public virtual string RankName { get; set; }

        public virtual string Description { get; set; }


    }
    [Table("PbStatuses")]
    public class PbStatus : Entity
    {

        [Required]
        public virtual string StatusName { get; set; }

        public virtual string Description { get; set; }


    }
    [Table("PbSubjects")]
    public class PbSubject : Entity
    {

        [Required]
        public virtual string ClassName { get; set; }

        public virtual string ObjectName { get; set; }

        public virtual string ChapterName { get; set; }

        public virtual string SectionName { get; set; }


    }
    [Table("PbSubjectEducations")]
    public class PbSubjectEducation : Entity
    {

        [Required]
        public virtual string SubjectName { get; set; }

        public virtual string Description { get; set; }


    }
    [Table("PbTypeEbooks")]
    public class PbTypeEbook : Entity
    {

        [Required]
        public virtual string TypeName { get; set; }

        public virtual string Description { get; set; }


    }
    [Table("PbTypeFiles")]
    public class PbTypeFile : Entity
    {

        [Required]
        public virtual string TypeFileName { get; set; }

        public virtual string Description { get; set; }


    }
}