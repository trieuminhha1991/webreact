using System.ComponentModel.DataAnnotations;

namespace TrieuMinhHa.Orenda.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}