using System;
using System.Collections.Generic;
using System.Text;

namespace TrieuMinhHa.Orenda.PbEbooks.Dto
{
    public class EbookListDto: FullAuditedEntity
	{
		public string EbookName { get; set; }

		public string Link { get; set; }

		public DateTime? EbookDateStart { get; set; }

		public bool Pro { get; set; }

		public decimal? EbookPrice { get; set; }

		public long EbookView { get; set; }

		public long EbookLike { get; set; }

		public long EbookDislike { get; set; }

		public string Discription { get; set; }

		public string EbookCover { get; set; }

		public long? BookPage { get; set; }
	}
}
