using System.Linq;
using TrieuMinhHa.Orenda.Authorization.Ebook;
namespace TrieuMinhHa.Orenda.EntityFrameworkCore.Seed.Host
{
    class TestDataEbooks
    {
        private readonly OrendaDbContext _context;
        public TestDataEbooks(OrendaDbContext context)
        {
            _context = context;
        }
        public void Create()
        {
            var ClassNew = _context.Ebooks.FirstOrDefault(p => p.EbookName == "DeThi");
            if (ClassNew == null)
            {
                _context.Ebooks.Add(
                    new Ebook
                    {
                        EbookName = "DeThi",
                        Link = "https://www.google.com/",
                        Pro = true,
                        EbookView = 100,
                        EbookLike = 100,
                        EbookDislike = 0,
                        BookPage = 100,
                        UserId = 1,
                        PbRankId = 1,
                        PbStatusId = 1,
                        PbTypeEbookId = 1,
                        PbTypeFileId = 1
                    });
            }
        }
    }
}
