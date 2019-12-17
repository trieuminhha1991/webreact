using System.Linq;
using Microsoft.EntityFrameworkCore;
using Abp.Authorization;
using Abp.Authorization.Roles;
using Abp.Authorization.Users;
using Abp.MultiTenancy;
using TrieuMinhHa.Orenda.Authorization;
using TrieuMinhHa.Orenda.Authorization.Roles;
using TrieuMinhHa.Orenda.Authorization.Users;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using TrieuMinhHa.Orenda.Authorization.EbookRelationship;

namespace TrieuMinhHa.Orenda.EntityFrameworkCore.Seed.Host
{
    class DataSeedEbook
    {
        private readonly OrendaDbContext _context;
        public DataSeedEbook(OrendaDbContext context)
        {
            _context = context;
        }
        public void Create()
        {
            CreateClass();
            CreateRank();
        }
        public void CreateClass()
        {
            for (int i = 0; i <= 2; i++)
            {
                var ClassNew = _context.PbClasses.FirstOrDefault(p => p.ClassName == "Lớp 1"+i && p.ClassGroup == "Cấp 3");
                if (ClassNew == null)
                {
                    _context.PbClasses.Add(
                        new PbClass
                        {
                            ClassGroup = "Cấp 3",
                            ClassName = "Lớp 1" + i,
                        });
                }
            }
            for (int i = 6; i <= 9; i++)
            {
                var ClassNew = _context.PbClasses.FirstOrDefault(p => p.ClassName == "Lớp " + i && p.ClassGroup=="Cấp 2");
                if (ClassNew == null)
                {
                    _context.PbClasses.Add(
                        new PbClass
                        {
                            ClassGroup = "Cấp 2",
                            ClassName = "Lớp " + i,
                        });
                }
            }
            for (int i = 1; i <= 6; i++)
            {
                var ClassNew = _context.PbClasses.FirstOrDefault(p => p.ClassName == "Năm " + i && p.ClassGroup == "Đại học");
                if (ClassNew == null)
                {
                    _context.PbClasses.Add(
                        new PbClass
                        {
                            ClassGroup = "Đại học",
                            ClassName = "Năm " + i,
                        });
                }
            }
        }
        public void CreateRank()
        {
            for (int i = 0; i <= 5; i++)
            {
                var RankNew = _context.PbRanks.FirstOrDefault(p => p.RankName == i+" sao");
                if (RankNew == null)
                {
                    _context.PbRanks.Add(
                        new PbRank
                        {
                            RankName = i + " sao",
                        });
                }
            }
        }
        public void CreateStatus()
        {
            var StatusNew = _context.PbStatuses.FirstOrDefault(p => p.StatusName == "Đang hoạt động");
            if (StatusNew == null)
            {
                _context.PbStatuses.Add(
                    new PbStatus
                    {
                        StatusName = "Đang hoạt động",
                    });
            }
            var StatusNew2 = _context.PbStatuses.FirstOrDefault(p => p.StatusName == "Dừng hoạt động");
            if (StatusNew2 == null)
            {
                _context.PbStatuses.Add(
                    new PbStatus
                    {
                        StatusName = "Dừng hoạt động",
                    });
            }
            var StatusNew3 = _context.PbStatuses.FirstOrDefault(p => p.StatusName == "Chờ kích hoạt");
            if (StatusNew3 == null)
            {
                _context.PbStatuses.Add(
                    new PbStatus
                    {
                        StatusName = "Chờ kích hoạt",
                    });
            }
        }
        public void CreateSubjectEducation()
        {
            var SubjectEducation = _context.PbSubjectEducations.FirstOrDefault(p => p.SubjectName == "Toán học");
            if (SubjectEducation == null)
            {
                _context.PbSubjectEducations.Add(
                    new PbSubjectEducation
                    {
                        SubjectName = "Toán học",
                    });
            }
            SubjectEducation = _context.PbSubjectEducations.FirstOrDefault(p => p.SubjectName == "Tiếng anh");
            if (SubjectEducation == null)
            {
                _context.PbSubjectEducations.Add(
                    new PbSubjectEducation
                    {
                        SubjectName = "Tiếng anh",
                    });
            }
        }
        public void CreateTypeFile()
        {
            var TypeFile = _context.PbTypeFiles.FirstOrDefault(p => p.TypeFileName == "docx");
            if (TypeFile == null)
            {
                _context.PbTypeFiles.Add(
                    new PbTypeFile
                    {
                        TypeFileName = "docx",
                    });
            }
            TypeFile = _context.PbTypeFiles.FirstOrDefault(p => p.TypeFileName == "pdf");
            if (TypeFile == null)
            {
                _context.PbTypeFiles.Add(
                    new PbTypeFile
                    {
                        TypeFileName = "pdf",
                    });
            }
        }
    }
}
