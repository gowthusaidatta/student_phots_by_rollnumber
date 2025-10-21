# 📸 Aditya Student Photos Finder

A Progressive Web App (PWA) to search and view student photos from Aditya Educational Institutions by roll number, name, or prefix.

## 🌟 Features

- **🔍 Multiple Search Options**
  - Search by full roll number (10 digits)
  - Search by prefix (8 characters) to view all students in a section
  - Search by student name
  
- **📱 Progressive Web App**
  - Installable on mobile and desktop devices
  - Offline support with service worker
  - Responsive design for all screen sizes
  
- **✨ Modern UI/UX**
  - Animated starry background
  - Confetti celebrations on successful searches
  - Smooth scrolling animations
  - Interactive hover effects
  - Scroll-to-top button
  
- **🎯 Smart Features**
  - Auto-fetch student names from API
  - Local storage caching for faster loading
  - Pagination for large result sets
  - Branch and campus identification
  - Lateral Entry (LE) student support
  
- **🎨 Visual Enhancements**
  - Glassmorphism design elements
  - Gradient backgrounds
  - Custom scrollbar styling
  - Animated loaders
  - Dynamic banners

## 🚀 Live Demo

Visit: [https://23mh1a1202.github.io/student_photos/](https://23mh1a1202.github.io/student_photos/)

## 🏗️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **PWA**: Service Workers, Web Manifest
- **APIs & Data Sources**: 
  - **Student Photo URLs**:
    - ACET/ACOE: `https://info.aec.edu.in/acet/studentPhotos/{ROLL_NUMBER}.jpg`
    - AEC: `https://info.aec.edu.in/AEC/studentPhotos/{ROLL_NUMBER}.jpg`
  - **Student Name API**: `https://student-name-api.onrender.com/`
    - `/get_name` - Fetch individual student name by roll number
    - `/resolve_name_to_roll` - Search students by name
- **Libraries**: 
  - Canvas Confetti (v1.5.1) for celebration effects
  - Custom canvas-based animated starry background
- **Storage**: LocalStorage for caching student names and user preferences

## 📋 How to Use

### 🎯 Download Student Photos by Branch Code and Roll Number

This application allows you to download and view student photos from Aditya University using different search methods:

### 1️⃣ Search by Full Roll Number (Individual Student)
**Format**: 10-digit roll number

**Examples**:
- `23MH1A4901` - ACOE student
- `23P31A0501` - ACET student  
- `23A91A0401` - AEC student

**Steps**:
1. Enter the complete 10-digit roll number
2. Click "Generate Photos" or press Enter
3. View the student's photo with name, branch, and campus details
4. Photo is automatically fetched from the university database

### 2️⃣ Search by Branch Code + Roll Number Prefix (Entire Section)
**Format**: 8-character prefix (Year + Campus + Branch Code)

**Examples**:
- `23MH1A49` - Downloads all IoT students from 2023 batch, ACOE campus
- `23P31A05` - Downloads all CSE students from 2023 batch, ACET campus
- `23A91A04` - Downloads all ECE students from 2023 batch, AEC campus
- `24MH1A42` - Downloads all CSE-AIML students from 2024 batch, ACOE campus

**Roll Number Format Breakdown**:
```
23 MH 1A 49 01
│  │  │  │  └─── Sequential number (01-99, A0-Z9)
│  │  │  └────── Branch code (see table below)
│  │  └───────── Department/Year identifier
│  └──────────── Campus code (MH/P3/A9)
└─────────────── Year of admission (23 = 2023)
```

**Steps**:
1. Enter the 8-character prefix (Year + Campus + Branch Code)
2. Click "Generate Photos"
3. System automatically:
   - Searches for all roll numbers with that prefix (01-99, A0-Z9)
   - Also includes Lateral Entry (LE) students automatically
   - Displays all found photos with pagination (100 per page)
4. Photos load progressively with student names fetched from API

### 3️⃣ Search by Student Name
**Format**: Full or partial name

**Examples**:
- `Datta` - Finds all students with "Datta" in their name
- `Sai Kumar` - Finds students matching this name

**Steps**:
1. Enter the student's name (case-insensitive)
2. Click "Generate Photos"
3. Results are grouped by:
   - Year/Batch (newest first)
   - Campus (ACOE → ACET → AEC)
4. Each result shows: Photo, Name, Roll Number, Branch, Campus

### 📥 Downloading Photos

**Individual Photo**:
- Right-click on the photo → "Save image as..."
- Or use browser screenshot tools

**Bulk Download** (Multiple Photos):
1. Use browser extensions like "Download All Images"
2. Use browser DevTools to access image URLs
3. Or right-click and save each photo individually

## 🎓 Supported Campuses

- **ACOE** (Aditya College of Engineering) - MH series
- **ACET** (Aditya College of Engineering & Technology) - P3 series
- **AEC** (Aditya Engineering College) - A9 series

## 📁 Project Structure

```
student_phots_by_rollnumber/
├── index.html                    # Main PWA page with modern UI
├── Student_Photo_Page_Frame.html # Alternative simple UI version
├── service-worker.js             # PWA service worker for offline support
├── manifest.json                 # PWA manifest configuration
├── offline.html                  # Offline fallback page
├── banner.png                    # Header banner image
├── icon-192.png                  # PWA icon (192x192)
├── icon-512.png                  # PWA icon (512x512)
├── down_image.gif                # Scroll indicator animation
├── down_image1.gif               # Alternative scroll indicator
└── README.md                     # Project documentation
```

## 🔧 Installation

### As a Web App
Simply visit the live URL and click "Install" when prompted to add it to your home screen.

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/gowthusaidatta/student_phots_by_rollnumber.git
   ```

2. Navigate to the project directory:
   ```bash
   cd student_phots_by_rollnumber
   ```

3. Open `index.html` in a modern web browser or serve using a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

4. Visit `http://localhost:8000` in your browser

## 🎨 Branch Codes Reference

Use these branch codes when searching by prefix to download specific branch students' photos:

| Code | Branch Name | Example Roll Format |
|------|------------|---------------------|
| **01** | Civil Engineering (CE) | `23MH1A0101` |
| **02** | Electrical & Electronics Engineering (EEE) | `23MH1A0201` |
| **03** | Mechanical Engineering (ME) | `23MH1A0301` |
| **04** | Electronics & Communication Engineering (ECE) | `23MH1A0401` |
| **05** | Computer Science & Engineering (CSE) | `23MH1A0501` |
| **12** | Information Technology (IT) | `23MH1A1201` |
| **14** | Electronics & Computer Engineering (ECT) | `23MH1A1401` |
| **15** | Computer Science & Systems Engineering (CSSE) | `23MH1A1501` |
| **19** | Electronics & Communication Engineering (ECE) | `23MH1A1901` |
| **26** | Mining Engineering | `23MH1A2601` |
| **27** | Petroleum Technology (PT) | `23MH1A2701` |
| **00** | Pharmacy | `23MH1A0001` |
| **42** | CSE - Artificial Intelligence & Machine Learning | `23MH1A4201` |
| **44** | Data Science (DS) | `23MH1A4401` |
| **49** | Internet of Things (IoT) | `23MH1A4901` |
| **61** | Artificial Intelligence & Machine Learning (AIML) | `23MH1A6101` |

### 🏫 Campus Codes

| Code | Campus Name | Location |
|------|-------------|----------|
| **MH** | Aditya College of Engineering (ACOE) | Main Campus |
| **P3** | Aditya College of Engineering & Technology (ACET) | ACET Campus |
| **A9** | Aditya Engineering College (AEC) | AEC Campus |

### 📚 Example Searches by Branch

**Download all CSE students from 2023 batch (ACOE)**:
- Enter: `23MH1A05`
- Result: Shows all students from `23MH1A0501` to `23MH1A05Z9`

**Download all IoT students from 2024 batch (ACET)**:
- Enter: `24P31A49`
- Result: Shows all students from that section

**Download all AIML students from 2023 batch (AEC)**:
- Enter: `23A91A42`
- Result: Shows all students from that branch

### 🎓 Lateral Entry (LE) Students

The system automatically searches for Lateral Entry students when you search by prefix:
- LE students have `5A` in their roll number
- Example: `24P35A05` (LE CSE students)
- No separate search needed - automatically included in results!

## 📱 PWA Features

### Installation
- Auto-prompt for installation on first visit
- "Don't show again" option for user preference
- Persistent installation state tracking

### Offline Support
- Service worker caches essential files
- Offline fallback page when network is unavailable
- Cache versioning for updates

### Performance
- Lazy loading of images
- Intersection Observer for efficient animations
- Local storage for name caching
- Optimized asset loading

## 🌐 Browser Support

- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Opera
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**V V Satya Sai Datta Manikanta Gowthu**

- LinkedIn: [linkedin.com/in/v-v-satya-sai-datta-manikanta-gowthu-41709b291](https://www.linkedin.com/in/v-v-satya-sai-datta-manikanta-gowthu-41709b291)
- GitHub: [@gowthusaidatta](https://github.com/gowthusaidatta)

## 📧 Support

For support, please create an issue in the GitHub repository or contact through LinkedIn.

## 🙏 Acknowledgments

- Student photos are sourced from the official Aditya Educational Institutions portal
- Student name resolution API
- Canvas Confetti library for celebration effects
- Aditya Educational Institutions for the platform

## 📊 Statistics

- Supports multiple campuses and batches
- Handles 100+ photos per page with pagination
- Caches student names for faster subsequent loads
- Optimized for mobile and desktop viewing

---

**⭐ If you find this project helpful, please consider giving it a star!**