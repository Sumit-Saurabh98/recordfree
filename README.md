# RecordFree 🎥🖥️

**RecordFree** is a full-featured video sharing and screen recording platform that enables users to effortlessly record, upload, and share videos with advanced privacy and protection features. Built with cutting-edge technologies like Next.js, Drizzle ORM, and TailwindCSS, this project offers a seamless user experience while maintaining high standards for performance and security.

🚀 **Live Demo:** [https://recordfree.vercel.app](https://recordfree.vercel.app)

---

## 📸 Screenshots

some screenshots below:_
##Sign-in page
<img width="1239" alt="Screenshot 2025-05-28 at 8 03 58 PM" src="https://github.com/user-attachments/assets/0e5d0034-39ee-45b0-8db6-56e29180b9d0" />
##Landing page
<img width="1239" alt="Screenshot 2025-05-28 at 8 04 25 PM" src="https://github.com/user-attachments/assets/d99afd3b-fca7-498d-80b6-4f1166538d9a" />
## Video Upload page
<img width="1239" alt="Screenshot 2025-05-28 at 8 04 36 PM" src="https://github.com/user-attachments/assets/9dc6eb90-1f7d-4100-a393-26c6e080101c" />
## Screen Recording page

## Video Upload page
<img width="1239" alt="Screenshot 2025-05-28 at 8 04 48 PM" src="https://github.com/user-attachments/assets/c20a1283-ea26-4aeb-ae4a-77ec28122797" />
<img width="1239" alt="Screenshot 2025-05-28 at 8 13 54 PM" src="https://github.com/user-attachments/assets/bb0ef2ea-9908-4879-80ec-5f2f1c1324a4" />
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
git clone https://github.com/yourusername/recordfree.git
cd recordfree

# Install dependencies
npm install

# Set environment variables
cp .env.example .env
# Update the .env file with your credentials

# Run the development server
npm run dev
