export const supportCategories = [
    {
        id: "all",
        label: "Tüm Konular",
    },
    {
        id: "account",
        label: "Hesap ve Giriş",
    },
    {
        id: "assessment",
        label: "Mizaç Testleri",
    },
    {
        id: "reports",
        label: "Raporlar",
    },
    {
        id: "school",
        label: "Okul Yönetimi",
    },
    {
        id: "guidance",
        label: "Rehberlik Paneli",
    },
    {
        id: "technical",
        label: "Teknik Sorunlar",
    },
] as const;

export type SupportCategory = (typeof supportCategories)[number]["id"];

export type SupportQuestion = {
    id: string;
    category: Exclude<SupportCategory, "all">;
    question: string;
    answer: string;
    guideUrl?: string;
};

export const supportQuestions: SupportQuestion[] = [
    {
        id: "account-access",
        category: "account",
        question: "EnneagramDigital hesabıma nasıl erişebilirim?",
        answer: "Platforma erişim şekli kullanım türünüze göre değişebilir. Kurumsal kullanıcıysanız hesap ve giriş bilgileriniz için kurumunuzun yetkilisiyle iletişime geçin. Erişim bilgilerinizin size iletilmediğini düşünüyorsanız destek talebi oluşturabilirsiniz.",
        guideUrl: "/kilavuzlar/platforma-baslangic",
    },
    {
        id: "forgot-password",
        category: "account",
        question: "Şifremi unuttum, ne yapmalıyım?",
        answer: "Giriş ekranınızda şifre yenileme seçeneği bulunuyorsa bu adımları izleyin. Böyle bir seçenek yoksa veya işlem tamamlanmıyorsa kurum yöneticinizden ya da destek ekibinden yardım isteyin. Şifrenizi kimseyle paylaşmayın.",
    },
    {
        id: "account-role",
        category: "account",
        question: "Neden bazı bölümleri görüntüleyemiyorum?",
        answer: "EnneagramDigital'de erişilebilen alanlar kullanıcı rolüne ve yetkilendirmeye bağlı olabilir. Öğrenci, veli, öğretmen, rehber öğretmen ve yönetici hesaplarının kullanım kapsamları farklıdır. Erişmeniz gerektiğini düşündüğünüz bir bölüm görünmüyorsa kurum yetkilinizle görüşün.",
    },
    {
        id: "assessment-purpose",
        category: "assessment",
        question: "Mizaç testi neyi ölçmeyi amaçlar?",
        answer: "Mizaç değerlendirmesi, bireyin genel davranış eğilimlerini, motivasyonlarını ve ihtiyaçlarını anlamaya yardımcı olmayı amaçlar. Sonuçlar kişisel farkındalık ve gelişim süreçlerini destekleyici bilgiler sunar. Klinik tanı veya psikolojik hastalık tespiti amacıyla kullanılmaz.",
        guideUrl: "/kilavuzlar/mizac-testi",
    },
    {
        id: "assessment-answer",
        category: "assessment",
        question: "Test sorularını nasıl yanıtlamalıyım?",
        answer: "Soruları dikkatle okuyarak günlük yaşamınızda size en yakın gelen seçeneği işaretleyin. Belirli bir günkü ruh hâlinizden çok genel eğilimlerinizi düşünmeye çalışın. Yanıtlarınızı başkalarının beklentilerine göre değil, kendinizi nasıl tanımladığınıza göre verin.",
        guideUrl: "/kilavuzlar/mizac-testi",
    },
    {
        id: "assessment-incomplete",
        category: "assessment",
        question: "Testi tamamlayamazsam ne yapmalıyım?",
        answer: "Bağlantınızı kontrol edin ve mümkünse aynı hesapla yeniden giriş yapın. Testinizin kaldığı yerden devam edip etmediği kullanılan modülün özelliklerine bağlıdır. Önceki yanıtlarınız görünmüyorsa işlemi tekrarlamadan önce destek ekibine başvurmanız uygun olacaktır.",
    },
    {
        id: "report-meaning",
        category: "reports",
        question: "Mizaç raporumu nasıl yorumlamalıyım?",
        answer: "Raporu yalnızca bir mizaç numarası olarak değerlendirmeyin. Temel motivasyonlar, güçlü yönler, ihtiyaçlar ve gelişim alanlarını birlikte inceleyin. Rapor açıklamalarını kendi deneyimlerinizle karşılaştırarak kişisel farkındalık amacıyla kullanın.",
        guideUrl: "/kilavuzlar/rapor-okuma",
    },
    {
        id: "report-different",
        category: "reports",
        question: "Rapordaki bazı özellikler bana uymuyorsa ne yapmalıyım?",
        answer: "Mizaç açıklamaları bireylerin bütün özelliklerini eksiksiz tanımlamaz. Yaşam deneyimleri, çevresel koşullar ve kişisel gelişim davranışları etkileyebilir. Sonuçları kesin bir etiket olarak görmeyin; raporun bütünü üzerinde düşünün ve gerekirse uzman değerlendirmesinden yararlanın.",
    },
    {
        id: "report-access",
        category: "reports",
        question: "Raporum neden görünmüyor?",
        answer: "Değerlendirmenin tamamlanıp tamamlanmadığını ve doğru hesapla giriş yaptığınızı kontrol edin. Rapor erişimi kullanıcı yetkilerine veya kurumun kullanım düzenine bağlı olabilir. Sorun devam ederse destek talebinde bulunabilirsiniz.",
    },
    {
        id: "school-structure",
        category: "school",
        question: "Okul, sınıf ve öğrenci yapısı nasıl düzenlenir?",
        answer: "Okul kullanımında temel organizasyon okul, sınıflar ve öğrenciler üzerine kuruludur. Öğrencilerin doğru sınıflarla ilişkilendirilmesi ve kullanıcı yetkilerinin görevlerine uygun belirlenmesi düzenli takip açısından önemlidir.",
        guideUrl: "/kilavuzlar/okul-yapisi",
    },
    {
        id: "school-permissions",
        category: "school",
        question: "Öğretmenler bütün öğrencilerin raporlarını görebilir mi?",
        answer: "Öğrenci verilerine erişim, görev ve yetkilendirme esaslarına göre sınırlandırılmalıdır. Bir öğretmenin hangi öğrenci bilgilerine erişebileceği kurumun tanımladığı yetkiler ve geçerli veri koruma kuralları çerçevesinde belirlenir.",
    },
    {
        id: "school-parent",
        category: "school",
        question: "Veliler çocuklarının raporlarına erişebilir mi?",
        answer: "Veli erişimi, ilgili kullanıcı hesabına tanımlanan yetkilere ve kurumun uygulama düzenine bağlıdır. Çocuğun raporunu görüntüleyemiyorsanız okulunuzun yetkili birimiyle iletişime geçebilirsiniz.",
        guideUrl: "/kilavuzlar/veli-ogrenci",
    },
    {
        id: "guidance-follow",
        category: "guidance",
        question: "Öğrenci takibinde nelere dikkat edilmelidir?",
        answer: "Öğrencinin mevcut ihtiyaçlarını, görüşme hedeflerini, gelişim sürecini ve gerekli rehberlik çalışmalarını bütüncül değerlendirin. Mizaç bilgisini tek başına karar verme aracı olarak kullanmayın. Öğrenciye ilişkin kayıtları yalnızca gerekli kapsamda tutun.",
        guideUrl: "/kilavuzlar/ogrenci-takibi",
    },
    {
        id: "guidance-activities",
        category: "guidance",
        question: "Rehberlik etkinlikleri nasıl seçilmelidir?",
        answer: "Etkinlik seçerken öğrencilerin yaşını, sınıf düzeyini, gelişim ihtiyaçlarını ve çalışmanın amacını dikkate alın. Etkinlikler öğrenci grubunun özelliklerine göre uyarlanmalı ve uygulama sonrasında değerlendirilmelidir.",
        guideUrl: "/kilavuzlar/rehberlik-etkinlikleri",
    },
    {
        id: "guidance-privacy",
        category: "guidance",
        question: "Öğrenci görüşme notlarını kimler görebilir?",
        answer: "Görüşme notları hassas bilgiler içerebilir. Bu nedenle erişim, ilgili görev ve yetkilerle sınırlı tutulmalı; kurumun gizlilik politikaları ve yürürlükteki mevzuat dikkate alınmalıdır. Yetki sorularında kurum yöneticinize başvurun.",
    },
    {
        id: "technical-browser",
        category: "technical",
        question: "Platform düzgün açılmıyorsa ne yapmalıyım?",
        answer: "Öncelikle internet bağlantınızı kontrol edin ve sayfayı yeniden yükleyin. Güncel bir tarayıcı kullanmayı deneyin. Sorun devam ediyorsa kullandığınız cihazı, tarayıcıyı ve karşılaştığınız hata mesajını destek talebinizde belirtin.",
    },
    {
        id: "technical-mobile",
        category: "technical",
        question: "EnneagramDigital mobil cihazlarda kullanılabilir mi?",
        answer: "Web arayüzü farklı ekran boyutlarına uyum sağlayacak şekilde tasarlanmaktadır. Ancak kullanılabilen özellikler ve deneyim, ilgili modülün geliştirme durumuna ve cihazın teknik özelliklerine göre değişebilir.",
    },
    {
        id: "technical-error",
        category: "technical",
        question: "Teknik bir hatayı nasıl bildirebilirim?",
        answer: "Destek talebi oluştururken hatanın gerçekleştiği sayfayı, yaptığınız işlemi, hata mesajını ve kullandığınız cihaz veya tarayıcı bilgisini paylaşın. Şifre, kimlik bilgisi veya öğrencilere ait gereksiz kişisel verileri göndermeyin.",
    },
];
