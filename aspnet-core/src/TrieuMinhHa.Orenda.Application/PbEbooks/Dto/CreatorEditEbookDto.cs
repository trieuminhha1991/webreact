﻿using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities.Auditing;
using System;
using System.ComponentModel.DataAnnotations;
using TrieuMinhHa.Orenda.Authorization.Ebook;

namespace TrieuMinhHa.Orenda.PbEbooks.Dto
{
	[AutoMapFrom(typeof(Ebook))]
	public class CreatorEbookDto
	{
		[Required]
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

		public long UserId { get; set; }

		public int? PbClassId { get; set; }

		public int? PbPlaceId { get; set; }

		public int PbRankId { get; set; }

		public int PbStatusId { get; set; }

		public int? PbSubjectId { get; set; }

		public int? PbSubjectEducationId { get; set; }

		public int PbTypeEbookId { get; set; }

		public int PbTypeFileId { get; set; }
	}
}
