# ZeroAds-YouTube 🚫📺

**ZeroAds-YouTube**, YouTube reklamlarını engellemek yerine onları **milisaniyeler içinde geçmeyi** hedefleyen ultra hafif bir Chrome eklentisidir.

Geleneksel reklam engelleyicilerin aksine, reklamın tamamen yüklenmesini engellemeye çalışmaz (bu YouTube'un anti-adblock sistemlerine takılabilir). Bunun yerine, **reklam başladığı anda**:
1.  Videoyu **16x hıza** alır (reklam göz açıp kapayıncaya kadar biter). ⏩
2.  Sesi kapatır (**Mute**). 🔇
3.  Varsa **"Reklamı Geç"** butonuna otomatik tıkla.

Bu sayede YouTube "reklam izlendi" sanır ama siz reklamı fark etmezsiniz bile.

## 🚀 Özellikler

-   **Ultra Hafif**: React, Vue vb. ağır kütüphaneler yok. Saf TypeScript.
-   **Agresif Hızlandırma**: 16.0x oynatma hızı.
-   **Tespit Edilemezlik**: DOM manipülasyonu minimum seviyededir.
-   **Gizlilik**: Hiçbir veri toplamaz, sadece YouTube üzerinde çalışır.

## 📦 Kurulum (Geliştirici Modu)

Bu eklenti henüz Chrome Web Mağazası'nda yayınlanmamıştır. Manuel olarak yükleyebilirsiniz:

1.  Bu projeyi indirin veya kopyalayın.
2.  `dist` klasörünün olduğundan emin olun (Eğer yoksa `npm install` ve `npm run build` komutlarını çalıştırın).
3.  Chrome'da `chrome://extensions` adresine gidin.
4.  Sağ üstteki **Developer mode (Geliştirici modu)** anahtarını açın.
5.  **Load unpacked (Paketlenmemiş öğe yükle)** butonuna tıklayın.
6.  Projenin içindeki **`dist`** klasörünü seçin.

### Gizli Sekmede Kullanım
Gizli sekmede de çalışması için:
1.  `chrome://extensions` sayfasında eklentinin **Details** butonuna tıklayın.
2.  **Allow in Incognito** seçeneğini aktif edin.

## 🛠️ Geliştirme

Projeyi geliştirmek isterseniz:

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme modu (dosya değişikliklerini izler)
npm run dev

# Projeyi derle (dist klasörünü oluşturur)
npm run build
```

## 📜 Lisans

MIT License. Özgürce dağıtabilir ve değiştirebilirsiniz.
