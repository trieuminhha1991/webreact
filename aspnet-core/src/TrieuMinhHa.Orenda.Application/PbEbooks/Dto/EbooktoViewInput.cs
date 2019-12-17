using Abp.Application.Services.Dto;

namespace TrieuMinhHa.Orenda.PbEbooks.Dto
{
    public class EbooktoViewInput: PagedAndSortedResultRequestDto
	{
        public string EbookNameFilter { get; set; }
		public string UserNameFilter { get; set; }

		public string PbClassClassNameFilter { get; set; }

		public string PbRankRankNameFilter { get; set; }

		public string PbStatusStatusNameFilter { get; set; }

		public string PbTypeEbookTypeNameFilter { get; set; }

		public string PbTypeFileTypeFileNameFilter { get; set; }
	}
}
