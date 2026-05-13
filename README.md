# Mantoon — Web Career (Mini Project 1)

เว็บไซต์รับสมัครงานของบริษัท Mantoon Co., Ltd. พัฒนาด้วย HTML, CSS และ JavaScript ล้วน
ส่งเป็นส่วนหนึ่งของรายวิชา **CS319** (Mini Project 1).

## Features

- หน้า Job Openings แสดงตำแหน่งงานที่เปิดรับ (Frontend, Backend, UI/UX Designer)
- ฟอร์ม Register สมัครงาน พร้อม **client-side validation** ด้วย JavaScript (regex)
- ส่วน Certify & Training แสดงคอร์สอบรม
- ส่วน About Us และ Contact Form
- ปุ่ม Scroll-to-top
- Responsive navigation

## Project Structure

```
mini_proj1_1650705245/
├── README.md
├── .gitignore
├── TOR_web.pdf                  # เอกสาร TOR ของโปรเจกต์
├── capture/                     # ภาพหน้าจอตัวอย่างเว็บ
│   └── capture01-05.png
└── mini_proj1_1650705245/
    ├── index.html               # หน้าเว็บหลัก
    ├── style.css                # สไตล์ชีท
    ├── form.js                  # ฟังก์ชัน validation
    └── img/                     # รูปภาพประกอบ
```

## How to Run

ไม่ต้อง build อะไร เปิดไฟล์ HTML ได้โดยตรง

1. โคลน repo
   ```bash
   git clone https://github.com/Siwawit-Js/Web_Carrier.git
   ```
2. เปิดไฟล์ `mini_proj1_1650705245/index.html` ในเบราว์เซอร์

หรือถ้าต้องการรันด้วย Live Server (VS Code Extension) ก็เปิดผ่าน Live Server ได้เลย

## Form Validation

- **Position / First Name / Last Name** — รับเฉพาะตัวอักษร A–Z
- **Tel** — รับเฉพาะตัวเลข
- **Email** — ตรวจรูปแบบอีเมล
- **Address** — รับตัวอักษรและตัวเลขผสมได้
- **Education Level** — ต้องเลือกจาก dropdown

## Authors

- **Siwawit Jitkusolpasuk** — siwawit.jitk@bumail.net
- **Sasakorn Traibanyatkul** — sasakorn.trai@bumail.net

## License

โปรเจกต์เพื่อการเรียนการสอน — Mantoon Co., Ltd. © 2025
