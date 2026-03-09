# Components Documentation

Dokumentasi untuk semua komponen dalam portfolio website.

## 📁 Struktur Komponen

### Hero.tsx

**Background image hero section dengan blur effect**

- Background image dengan blur dan overlay gelap
- Judul dan tagline centered
- 2 CTA buttons (View My Work & Get In Touch)
- Scroll indicator animasi

**Edit:**

- Ganti nama di line 19
- Ganti tagline di line 22
- Ganti background image path di line 11

---

### About.tsx

**Section tentang diri Anda dengan foto dan skills**

- Layout 2 kolom: foto kiri, konten kanan
- Deskripsi About Me
- Grid Skills dan Tools dalam card dengan hover effect

**Edit:**

- Ganti foto path di line 8
- Edit deskripsi di line 14-24
- Update skills list di line 29-33
- Update tools list di line 37-41

---

### Projects.tsx

**Showcase portfolio projects**

- Grid 3 kolom (responsive)
- Data projects dalam array untuk easy maintenance
- Card dengan hover effect (lift up & shadow)
- Technology badges

**Edit:**

- Edit `projects` array di line 2-23
- Tambah/kurangi project dengan menambah object di array
- Setiap project punya: id, title, description, technologies

**Contoh:**

```tsx
{
  id: 4,
  title: "Project Baru",
  description: "Deskripsi project baru",
  technologies: ["React", "TailwindCSS", "Firebase"],
}
```

---

### Contact.tsx

**Section kontak dengan link ke social media**

- Title dan subtitle
- 3 tombol kontak (Email, GitHub, LinkedIn)
- Data dalam array untuk easy maintenance

**Edit:**

- Edit `contactLinks` array di line 2-22
- Update email, GitHub, LinkedIn URL
- Bisa tambah tombol baru (Twitter, Instagram, dll)

---

### Navbar.tsx

**Navigation bar dengan scroll effect**

- Transparent saat di hero section
- Berubah solid white dengan shadow saat scroll
- Smooth transition
- Menu links ke semua section

**Edit:**

- Ganti nama logo di line 28
- Edit menu items di line 34-52

---

### Footer.tsx

**Footer dengan copyright**

- Simple footer dengan tahun otomatis
- Background dark

---

## 🎨 Styling Improvements

### Konsistensi yang Diterapkan:

1. **Padding yang seragam**: `py-24 md:py-32` untuk section besar
2. **Border radius**: `rounded-3xl` untuk card, `rounded-2xl` untuk elemen kecil
3. **Shadow hierarchy**:
   - Default: `shadow-md`
   - Hover: `shadow-2xl`
4. **Spacing**: Konsisten menggunakan gap-4, gap-6, gap-8
5. **Typography**:
   - Heading: `text-4xl md:text-5xl`
   - Body: `text-lg`
   - Small: `text-sm`
6. **Transitions**: `duration-300` atau `duration-500` untuk smooth animation
7. **Colors**: Gray scale yang konsisten (50, 100, 600, 900)

### Background Blur Effect:

- Background image di Hero section menggunakan `blur-sm` dan `scale-105`
- Overlay dengan `backdrop-blur-sm` untuk efek depth
- Opacity gradient `from-black/75 via-black/60 to-black/75`

### Hover Effects:

- Cards: `-translate-y-3` saat hover
- Buttons: `scale-105` saat hover
- Background transitions yang smooth

---

## 🚀 Cara Pakai

Import semua komponen dari index:

```tsx
import { Navbar, Hero, About, Projects, Contact, Footer } from "@/components";
```

Atau import individual:

```tsx
import Hero from "@/components/Hero";
```

---

## 📝 Tips Maintenance

1. **Update konten**: Edit langsung di file komponen masing-masing
2. **Tambah section**: Buat file baru di `/components`, export di `index.ts`
3. **Ubah warna**: Edit class Tailwind di komponen
4. **Responsive**: Sudah ada breakpoint `md:` dan `lg:` bawaan
5. **Animasi**: Gunakan class animation dari `globals.css`
