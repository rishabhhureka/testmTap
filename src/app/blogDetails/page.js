"use client"; // This is required at the top of the file for Client Components

import { useSearchParams } from "next/navigation";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
const getBackgroundColor = (subheading) => {
  switch (subheading) {
    case "PRODUCTS UPDATES":
      return "black";
    case "NETWORKING TIPS":
      return "#60C447";
    case "NEWS & EVENTS":
      return "#FCE93B";
    case "USE CASES":
      return "#2B59C3";
    default:
      return "transparent";
  }
};
const blogDetailData = {
  title: "Customer Feedback",
  subTitle: "Why is customer feedback important to any business?",
  content: [
    {
      heading: "",
      text: "In today's fast-paced digital era, customer feedback has become a vital ingredient for business success. It holds the key to understanding customer needs, enhancing satisfaction, and driving marketing strategies. While the traditional methods of collecting feedback often fall short, the emergence of online platforms like Google Reviews has revolutionized the process. We will explore the importance of customer feedback, the significance of Google Reviews and how mTap NFC Google Reviews Cards can empower businesses to maximize their customer feedback efforts.",
    },
    {
      title: "Customer Feedback",
      text: "",
    },
    {
      subtitle: "Why is customer feedback important to any business?",
      text: "Customer feedback serves as a compass guiding businesses towards success. It offers invaluable benefits, including:",
    },
    {
      heading: "Insight into customer needs",
      text: "Feedback provides a window into the minds of customers, revealing their expectations, preferences, and pain points. By understanding these insights, businesses can refine their products or services to better align with customer desires.",
    },
    {
      heading: "Improved customer satisfaction",
      text: "Actively listening to feedback and taking prompt action demonstrates a commitment to customer satisfaction. Addressing concerns, resolving issues, and incorporating suggestions contribute to enhanced customer loyalty and happiness.",
    },
    {
      heading: "Competitive advantage",
      text: "Businesses that prioritize customer feedback gain a significant edge in the marketplace. By leveraging feedback to continuously improve their offerings, they stand out from the competition, attracting more customers and fostering long-term relationships.",
    },
    {
      heading: "Challenges in getting customer feedback",
      text: "Despite its importance, obtaining customer feedback can be a challenging endeavor due to various obstacles, including:",
    },
    {
      heading: "Lack of customer motivation",
      text: "Customers are often too busy to provide feedback or may not perceive it as a valuable use of their time. Convincing them to share their opinions requires proactive efforts from businesses.",
    },
    {
      heading: "Limited response rates",
      text: "Traditional feedback methods such as surveys or comment cards often yield disappointingly low response rates. This can lead to skewed data and incomplete insights, hindering businesses from making informed decisions.",
    },
    {
      heading: "Bias and inaccuracy",
      text: "Feedback collected through self-reported methods can be subject to response bias, impacting the reliability and accuracy of the insights gathered. Overcoming these biases and obtaining genuine feedback is crucial for making informed decisions.",
    },
  ],
  sources: [
    {
      name: "BrightLocal",
      url: "https://www.brightlocal.com/research/local-consumer-review-survey",
    },
    {
      name: "Moz",
      url: "https://moz.com/blog/what-do-google-reviews-mean-for-local-seo",
    },
    {
      name: "ReviewTrackers",
      url: "https://www.reviewtrackers.com/guides/importance-of-online-reviews",
    },
    {
      name: "SurveyMonkey",
      url: "https://www.surveymonkey.com/curiosity/customer-feedback-stats",
    },
  ],
};

const BlogDetails = () => {
  const searchParams = useSearchParams();
  const heading = searchParams.get("heading");
  const subheading = searchParams.get("subheading");
  const image = searchParams.get("image");
  const author = searchParams.get("author");
  const authorTitle = searchParams.get("authorTitle");
  const avatar = searchParams.get("avatar");
  return (
    <div
      style={{
        marginTop: "12rem",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ width: "80%", margin: "0 auto" }}>
        <Card
          variant="plain"
          sx={{
            maxHeight: "1100vh",
            width: "100%",
            overflow: "auto",
            marginBottom: "2rem",
            borderRadius: 20,
          }}
        >
          <CardMedia
            component="img"
            alt="blog"
            image={image}
            sx={{ maxHeight: 550 }}
          />
          <Box
            sx={{ display: "flex", flexDirection: "column", margin: "2rem" }}
          >
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                variant="h6"
                sx={{
                  display: "inline-block",
                  marginBottom: "1rem",
                  backgroundColor: getBackgroundColor(subheading),
                  color: subheading === "NEWS & EVENTS" ? "black" : "white",
                  fontWeight: "600",
                  border: "8px solid transparent",
                }}
              >
                {subheading}
              </Typography>

              <Typography
                variant="h1"
                style={{
                  fontSize: "60px",
                  fontWeight: "900",

                  marginBottom: "1rem",
                }}
              >
                {heading}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h6" color="text.secondary">
                  26 january 2023
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ marginBottom: "2rem" }}
                >
                  By: {author}
                </Typography>
              </Box>
              {blogDetailData.content.map((item, index) => (
                <Box key={index} sx={{ margin: "1rem" }}>
                  {item.title && (
                    <Typography
                      variant="h3"
                      style={{ fontWeight: "700", marginBottom: "2rem" }}
                    >
                      {item.title}
                    </Typography>
                  )}
                  {item.subtitle && (
                    <Typography
                      variant="h4"
                      color="text.secondary"
                      style={{ fontWeight: "700", marginBottom: "2rem" }}
                    >
                      {item.subtitle}
                    </Typography>
                  )}
                  {item.heading && (
                    <Typography
                      variant="h4"
                      style={{ fontWeight: "700", marginBottom: "2rem" }}
                    >
                      {item.heading}
                    </Typography>
                  )}
                  <Typography variant="body1" style={{ fontSize: "25px" }}>
                    {item.text}
                  </Typography>
                </Box>
              ))}
              <Box sx={{ marginTop: "2rem" }}>
                <Typography
                  variant="h4"
                  style={{ fontWeight: "700", marginBottom: "1rem" }}
                >
                  Sources:
                </Typography>
                <ul>
                  {blogDetailData.sources.map((source, index) => (
                    <li key={index} style={{ marginBottom: "0.5rem" }}>
                      <Box component="span" sx={{ display: "inline" }}>
                        <Typography
                          variant="body1"
                          style={{
                            fontSize: "25px",
                            display: "inline",
                            marginRight: "0.5rem",
                          }}
                        >
                          {source.name}:
                        </Typography>
                        <Typography
                          variant="body1"
                          component="a"
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ display: "inline", color: "black" ,fontSize: "25px",}}
                        >
                          {source.url}
                        </Typography>
                      </Box>
                    </li>
                  ))}
                </ul>
              </Box>
            </CardContent>
          </Box>
        </Card>
      </div>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <Card
          sx={{
            display: "flex",
            marginBottom: "6rem",
            maxHeight: "100vh",
            width: "100%",
            overflow: "auto",

            borderRadius: 20,
            borderRadius: 20,
            overflow: "auto",
          }}
        >
          {" "}
          <Avatar
            alt={author}
            src={avatar}
            sx={{ width: 270, height: 270,margin:'4rem'}}
          />
          <Box
            sx={{ marginTop:'2rem', marginLeft: "8rem" ,width:'100%'}}
          >
          
            <CardContent >
              <Typography variant="h5" sx={{marginBottom:'.5rem'}}>Author</Typography>
              <Typography
                variant="h3"
                sx={{
                  color: "black",
                  fontWeight: "900",
                  maxWidth: "40vw",
                  marginBottom:'.5rem'
                }}
              >
                {author}
              </Typography>
              <Typography
                variant="h4"
                color="text.secondary"
                component="div"
                sx={{
                  color: "black",
                  maxWidth: "40vw",
                  marginBottom:'2rem'
                }}
              >
                {authorTitle}
              </Typography>
              <Typography
                variant="h4"
                color="text.secondary"
                component="div"
                sx={{
                  color: "black",
                  maxWidth: "40vw",
                  marginBottom:'2rem'
                }}
              >
              Email:  abc123@gmail.com
              </Typography>
              <Box sx={{display:'flex' , gap:2}}>
              <LinkedInIcon sx={{ fontSize: 50 }}/>
              <InstagramIcon sx={{ fontSize: 50 }}/>
              <FacebookRoundedIcon sx={{ fontSize: 50 }}/>
              <XIcon sx={{ fontSize: 50 }}/>
              <YouTubeIcon sx={{ fontSize: 50 }}/>

              </Box>
            </CardContent>
          </Box>
        </Card>
      </div>
    </div>
  );
};

export default BlogDetails;
