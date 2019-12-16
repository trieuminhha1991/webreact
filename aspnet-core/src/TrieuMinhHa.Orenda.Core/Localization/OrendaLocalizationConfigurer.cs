using Abp.Configuration.Startup;
using Abp.Localization.Dictionaries;
using Abp.Localization.Dictionaries.Xml;
using Abp.Reflection.Extensions;

namespace TrieuMinhHa.Orenda.Localization
{
    public static class OrendaLocalizationConfigurer
    {
        public static void Configure(ILocalizationConfiguration localizationConfiguration)
        {
            localizationConfiguration.Sources.Add(
                new DictionaryBasedLocalizationSource(OrendaConsts.LocalizationSourceName,
                    new XmlEmbeddedFileLocalizationDictionaryProvider(
                        typeof(OrendaLocalizationConfigurer).GetAssembly(),
                        "TrieuMinhHa.Orenda.Localization.SourceFiles"
                    )
                )
            );
        }
    }
}
