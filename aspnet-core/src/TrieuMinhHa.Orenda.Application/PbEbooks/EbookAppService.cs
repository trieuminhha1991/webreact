using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Collections.Extensions;
using Abp.Domain.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Linq.Dynamic.Core;
using Abp.Linq.Extensions;
using System.Threading.Tasks;
using TrieuMinhHa.Orenda.Authorization.Ebook;
using TrieuMinhHa.Orenda.PbEbooks.Dto;
using TrieuMinhHa.Orenda.Authorization.Users;
using TrieuMinhHa.Orenda.Authorization.EbookRelationship;

namespace TrieuMinhHa.Orenda.PbEbooks
{
    public class EBookAppService : ApplicationService, IEbookAppService
    {
        private readonly IRepository<Ebook> _ebookRepository;
        private readonly IRepository<User, long> _userRepository;
        private readonly IRepository<PbClass, int> _classRepository;
        private readonly IRepository<PbPlace, int> _pbplaceRepository;
        private readonly IRepository<PbRank, int> _rankRepository;
        private readonly IRepository<PbStatus, int> _statusRepository;
        private readonly IRepository<PbSubject, int> _subjectRepository;
        private readonly IRepository<PbSubjectEducation, int> _subjectEducationRepository;
        private readonly IRepository<PbTypeEbook, int> _typeBookRepository;
        private readonly IRepository<PbTypeFile, int> _typeFileRepository;

        public EBookAppService(IRepository<Ebook> ebook, IRepository<User,long> user,IRepository<PbClass, int> classRep,
            IRepository<PbPlace, int> pbplace, IRepository<PbRank, int> rank, IRepository<PbStatus, int> status, IRepository<PbSubject, int> subject,
            IRepository<PbSubjectEducation, int> SubjectEducation, IRepository<PbTypeEbook, int> typeBook, IRepository<PbTypeFile, int> typeFile
            )
        {
            _ebookRepository = ebook;
            _userRepository = user;
            _classRepository = classRep;
            _pbplaceRepository = pbplace;
            _rankRepository = rank;
            _statusRepository = status;
            _subjectRepository = subject;
            _subjectEducationRepository = SubjectEducation;
            _typeBookRepository = typeBook;
            _typeFileRepository = typeFile;
        }
        public async Task<ListResultDto<EbookViewDto>> GetAll(EbooktoViewInput input)
        {
            var filteredPbEbooks = _ebookRepository.GetAll()
                        .Include(e => e.UserFk)
                        .Include(e => e.PbClassFk)
                        .Include(e => e.PbRankFk)
                        .Include(e => e.PbStatusFk)
                        .Include(e => e.PbTypeEbookFk)
                        .Include(e => e.PbTypeFileFk)
                        .WhereIf(!string.IsNullOrWhiteSpace(input.EbookNameFilter), e => e.EbookName.ToLower() == input.EbookNameFilter.ToLower().Trim())
                        .WhereIf(!string.IsNullOrWhiteSpace(input.UserNameFilter), e => e.UserFk != null && e.UserFk.Name.ToLower() == input.UserNameFilter.ToLower().Trim())
                        .WhereIf(!string.IsNullOrWhiteSpace(input.PbClassClassNameFilter), e => e.PbClassFk != null && e.PbClassFk.ClassName.ToLower() == input.PbClassClassNameFilter.ToLower().Trim())
                        .WhereIf(!string.IsNullOrWhiteSpace(input.PbRankRankNameFilter), e => e.PbRankFk != null && e.PbRankFk.RankName.ToLower() == input.PbRankRankNameFilter.ToLower().Trim())
                        .WhereIf(!string.IsNullOrWhiteSpace(input.PbStatusStatusNameFilter), e => e.PbStatusFk != null && e.PbStatusFk.StatusName.ToLower() == input.PbStatusStatusNameFilter.ToLower().Trim())
                        .WhereIf(!string.IsNullOrWhiteSpace(input.PbTypeEbookTypeNameFilter), e => e.PbTypeEbookFk != null && e.PbTypeEbookFk.TypeName.ToLower() == input.PbTypeEbookTypeNameFilter.ToLower().Trim())
                        .WhereIf(!string.IsNullOrWhiteSpace(input.PbTypeFileTypeFileNameFilter), e => e.PbTypeFileFk != null && e.PbTypeFileFk.TypeFileName.ToLower() == input.PbTypeFileTypeFileNameFilter.ToLower().Trim());

            var pagedAndFilteredPbEbooks = filteredPbEbooks
                .OrderBy(input.Sorting ?? "id asc")
                .PageBy(input);
            var pbEbooks = from o in pagedAndFilteredPbEbooks
                           join o1 in _userRepository.GetAll() on o.UserId equals o1.Id into j1
                           from s1 in j1.DefaultIfEmpty()

                           join o2 in _classRepository.GetAll() on o.PbClassId equals o2.Id into j2
                           from s2 in j2.DefaultIfEmpty()

                           join o3 in _pbplaceRepository.GetAll() on o.PbPlaceId equals o3.Id into j3
                           from s3 in j3.DefaultIfEmpty()

                           join o4 in _rankRepository.GetAll() on o.PbRankId equals o4.Id into j4
                           from s4 in j4.DefaultIfEmpty()

                           join o5 in _statusRepository.GetAll() on o.PbStatusId equals o5.Id into j5
                           from s5 in j5.DefaultIfEmpty()

                           join o6 in _subjectRepository.GetAll() on o.PbSubjectId equals o6.Id into j6
                           from s6 in j6.DefaultIfEmpty()

                           join o7 in _subjectEducationRepository.GetAll() on o.PbSubjectEducationId equals o7.Id into j7
                           from s7 in j7.DefaultIfEmpty()

                           join o8 in _typeBookRepository.GetAll() on o.PbTypeEbookId equals o8.Id into j8
                           from s8 in j8.DefaultIfEmpty()

                           join o9 in _typeFileRepository.GetAll() on o.PbTypeFileId equals o9.Id into j9
                           from s9 in j9.DefaultIfEmpty()
                           select new EbookViewDto
                           {
                               EbookListDto = new EbookListDto
                               {
                                   EbookName = o.EbookName,
                                   Link = o.Link,
                                   EbookDateStart = o.EbookDateStart,
                                   Pro = o.Pro,
                                   EbookPrice = o.EbookPrice,
                                   EbookView = o.EbookView,
                                   EbookLike = o.EbookLike,
                                   EbookDislike = o.EbookDislike,
                                   Discription = o.Discription,
                                   EbookCover = o.EbookCover,
                                   BookPage = o.BookPage,
                                   Id = o.Id
                               },
                               UserName = s1 == null ? "" : s1.UserName,
                               PbClassClassName = s2 == null ? "" : s2.ClassName.ToString(),
                               PbPlacePlaceName = s3 == null ? "" : s3.PlaceName.ToString(),
                               PbRankRankName = s4 == null ? "" : s4.RankName.ToString(),
                               PbStatusStatusName = s5 == null ? "" : s5.StatusName.ToString(),
                               PbSubjectSectionName = s6 == null ? "" : s6.SectionName.ToString(),
                               PbSubjectEducationSubjectName = s7 == null ? "" : s7.SubjectName.ToString(),
                               PbTypeEbookTypeName = s8 == null ? "" : s8.TypeName.ToString(),
                               PbTypeFileTypeFileName = s9 == null ? "" : s9.TypeFileName.ToString()
                           };
            var totalCount=  await filteredPbEbooks.CountAsync();
            return new PagedResultDto<EbookViewDto>(
                totalCount,
                await pbEbooks.ToListAsync()
            );
        }
        public async Task CreateOrEdit(CreatorEditEbookDto input)
        {
            if(input.Id==null)
            {
                Create(input);
            }
            else
            {
                Edit(input);
            }
        }
        public async Task Create(CreatorEditEbookDto input)
        {
            var ebook = ObjectMapper.Map<Ebook>(input);
            _ebookRepository.InsertAsync(ebook);
        }
        public async Task Edit(CreatorEditEbookDto input)
        {
            var ebook = _ebookRepository.FirstOrDefault(input.Id);
            ObjectMapper.Map(input, ebook);

        }
        public async Task Delete(EntityDto input)
        {
            _ebookRepository.DeleteAsync(input.Id);
        }
    }

}
