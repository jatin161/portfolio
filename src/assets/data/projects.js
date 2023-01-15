import { v4 as uuidv4 } from 'uuid';
import BurgerImg from '../images/burgermaker.jpg';
import CloudManagementImg from '../images/cyber-bg.png';
import NetflixImg from '../images/Netflix.jpg';
import OlympicImg from '../images/Capture.JPG';
import WhatsappImg from '../images/whatsapp-web-crawlers.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Movie Recommedation System',
    // eslint-disable-next-line prettier/prettier
    desc:'The Movie Recommendation System based on Cosine Similarity is a data science project that suggests movies to users using machine learning techniques. It uses Cosine Similarity to measure the similarity between movies based on genre, cast, director, keywords, and overview to provide personalized recommendations',

    img: CloudManagementImg,
    path: 'https://jatin161-tmdb-movie-recommendation-main-03719j.streamlit.app/',
    target: '_blank',
  },
  {
    id: uuidv4(),
    name: 'Color Detection Using Open-CV',
    // eslint-disable-next-line prettier/prettier
    desc:
    'This Streamlit app utilizes OpenCV to detect the dominant colors present in an image.The app allows the user to double click on any point of the image and it will display the corresponding RGB value of the color present at that point',
    img: NetflixImg,
    path: 'https://github.com/jatin161/Color_detector.git',
    target: '_blank',
  },
  {
    id: uuidv4(),
    name: 'Sentiment Analysis (Text & IMDB Movie reviews)',
    // eslint-disable-next-line prettier/prettier
    desc:
    'Sentiment Analysis app using Data Science is an application that uses machine learning algorithms to determine the sentiment or emotion expressed in text, specifically movie reviews from IMDB. It analyzes the text to classify it as positive, negative, or neutral and provides a sentiment score. This app can be used to gain insights into customer feedback, review trends, and to identify key issues and topics related to a movie',
    img: BurgerImg,
    path: 'https://jatin161-imdb-review-sentiment-main-zba3o4.streamlit.app/',
    target: '_blank',
  },
  {
    id: uuidv4(),
    name: 'DATA Analysis on Olympics Dataset',
    // eslint-disable-next-line prettier/prettier
    desc:
    'The app provides data analysis and visualization on the Olympics dataset. It enables users to explore the dataset, filter and sort the data, and view various statistics and graphs. The app can help users to gain insights on the Olympic data, such as the performance of different countries, the distribution of medals over different sports, the evolution of the number of participating countries and athletes over the years, and more',
    img: OlympicImg,
    path: 'https://jatin161-olympic-data-analysis-main-t43jdz.streamlit.app/',
    target: '_blank',
  },
  {
    id: uuidv4(),
    name: 'Web Crawler -Whatsapp',
    // eslint-disable-next-line prettier/prettier
    desc:
    'This Python script utilizes the Selenium library to automate the process of logging into WhatsApp Web, crawling through a list of contacts, and sending a predefined message to each of them',
    img: WhatsappImg,
    path: 'https://github.com/jatin161/Whatsapp_Crawler',
    target: '_blank',
  },
];

export default projects;
