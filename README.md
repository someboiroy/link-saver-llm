# NLP Link Saver
Intelligent link categorization  based on site's content.

## About

NLP Link Saver is a web application designed to organize and categorize web links using advanced Natural Language Processing (NLP) techniques. Built on a modern tech stack, it leverages the DeBERTa-v3-base-mnli-fever-anli model from Hugging Face to analyze and categorize links, enhancing the user's web browsing and bookmarking experience.

## Tech Stack

- **Frontend**: Next.js
- **Backend**: Prisma, SQLite
- **Text Classification Model**: [DeBERTa-v3-base-mnli-fever-anli via Hugging Face](https://huggingface.co/MoritzLaurer/DeBERTa-v3-base-mnli-fever-anli)

## Getting Started

1. **Clone the Repository**
   
   ```bash
   git clone https://github.com/your-username/nlp-link-saver.git
   cd nlp-link-saver
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the project root and add the necessary environment variables.

   ```
   DATABASE_URL="file:./dev.db"
   HUGGINGFACE_BEARER_TOKEN="your_hugging_face_bearer_token"
   ```

4. **Run the Application**

   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000` in your browser.

## Usage

- Add new links via the input field.
- View categorized links on the main page.

## Acknowledgments & Citations

Laurer, Moritz, Wouter van Atteveldt, Andreu Salleras Casas, and Kasper Welbers. 2022. ‘Less Annotating, More Classifying – Addressing the Data Scarcity Issue of Supervised Machine Learning with Deep Transfer Learning and BERT - NLI’. Preprint, June. Open Science Framework. https://osf.io/74b8k.
