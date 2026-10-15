export const contactTopics = [
    {
        value: "demo",
        label: "Genel Demo Talebi",
    },
    {
        value: "kurumsal-demo",
        label: "Kurumsal Demo Talebi",
    },
    {
        value: "okul-demo",
        label: "Okullar İçin Demo Talebi",
    },
    {
        value: "bireysel",
        label: "Bireysel Bilgi Talebi",
    },
    {
        value: "genel",
        label: "Genel İletişim",
    },
    {
        value: "destek",
        label: "Teknik Destek Talebi",
    },
] as const;

export type ContactTopic = (typeof contactTopics)[number]["value"];

export const contactBenefits = [
    {
        number: "01",
        title: "İhtiyacınızı anlayalım",
        description:
            "Okulunuz, kurumunuz veya bireysel kullanım amacınız hakkında bilgi paylaşın. Böylece hangi çözümün sizin için daha uygun olabileceğini birlikte değerlendirebiliriz.",
    },
    {
        number: "02",
        title: "Platformu birlikte inceleyelim",
        description:
            "Demo talebinizde EnneagramDigital'in mizaç değerlendirmelerini, raporlama yaklaşımını ve kullanım alanlarını ihtiyaçlarınıza göre ele alabiliriz.",
    },
    {
        number: "03",
        title: "Sorularınızı yanıtlayalım",
        description:
            "Kullanım süreci, uygulama kapsamı ve kurumunuza uygun çözümler hakkında merak ettiğiniz konuları görüşebiliriz.",
    },
];
