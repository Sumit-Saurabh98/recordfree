# RecordFree 🎥🖥️

**RecordFree** is a full-featured video sharing and screen recording platform that enables users to effortlessly record, upload, and share videos with advanced privacy and protection features. Built with cutting-edge technologies like Next.js, Drizzle ORM, and TailwindCSS, this project offers a seamless user experience while maintaining high standards for performance and security.

🚀 **Live Demo:** [https://recordfree.vercel.app](https://recordfree.vercel.app)

---

## 📸 Screenshots

**Sign-in page**
<img width="1239" alt="Screenshot 2025-05-28 at 8 03 58 PM" src="https://github.com/user-attachments/assets/0e5d0034-39ee-45b0-8db6-56e29180b9d0" />

**Video List page**
<img width="1239" alt="Screenshot 2025-05-28 at 8 04 25 PM" src="https://github.com/user-attachments/assets/d99afd3b-fca7-498d-80b6-4f1166538d9a" />

**Video Upload page**
<img width="1239" alt="Screenshot 2025-05-28 at 8 04 36 PM" src="https://github.com/user-attachments/assets/9dc6eb90-1f7d-4100-a393-26c6e080101c" />

**Screen Recording page**
<img width="1239" alt="Screenshot 2025-05-28 at 8 04 48 PM" src="https://github.com/user-attachments/assets/c20a1283-ea26-4aeb-ae4a-77ec28122797" />

**Video Player page**
<img width="1239" alt="Screenshot 2025-05-28 at 8 13 54 PM" src="https://github.com/user-attachments/assets/bb0ef2ea-9908-4879-80ec-5f2f1c1324a4" />

**User Profile page**
<img width="1239" alt="Screenshot 2025-05-28 at 8 05 04 PM" src="https://github.com/user-attachments/assets/a82c2fbe-e20b-4be6-a685-44dbd6fa32d3" />

## 🛠️ Tech Stack

- **Frontend:**

  - [Next.js 15](https://nextjs.org/)
  - [React 19](https://react.dev/)
  - [Tailwind CSS 4](https://tailwindcss.com/)
  - [clsx](https://www.npmjs.com/package/clsx) for conditional class names

- **Backend / Server-side:**

  - [Drizzle ORM](https://orm.drizzle.team/) with PostgreSQL
  - [Xata](https://xata.io/) for fast, scalable database solutions

- **Auth & Security:**

  - [Better Auth](https://www.npmjs.com/package/better-auth) for authentication
  - Google Authentication via OAuth
  - Rate limiting & spam/bot protection via [@arcjet](https://arcjet.com/)
  - Email validation for disposable/temp emails

- **Dev Tools:**
  - TypeScript
  - ESLint
  - Dotenv for environment variables
  - Drizzle Kit for schema management

---

## ✨ Features

- 🎥 **Screen Recording & Video Uploading**
- 🌐 **Multilingual Video Transcription**
- 🔐 **Google Authentication**
- 🔗 **Shareable Video Links**
- 🔓 **Public / Private Access Control**
- 🗑️ **Video Deletion**
- 🧠 **Video Thumbnail Generation**
- ✉️ **Email Validation for Disposable & Temporary Emails**
- 🛡️ **Spam & Bot Protection**
- 🚫 **Rate Limiting**

---

## 🔧 Getting Started

```bash
# Clone the repository
git clone https://github.com/sumit-saurabh98/recordfree.git
cd recordfree

# Install dependencies
npm install

# Set environment variables
#Better auth
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000

#Google
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

#xata database
XATA_API_KEY=
DATABASE_URL_POSTGRES=
DATABASE_URL=

NEXT_PUBLIC_BASE_URL=http://localhost:3000

#Bunny

BUNNY_STORAGE_ACCESS_KEY=
BUNNY_LIBRARY_ID=
BUNNY_STREAM_ACCESS_KEY=

#Arcjet
ARCJET_API_KEY=

# Run the development server
npm run dev
```
