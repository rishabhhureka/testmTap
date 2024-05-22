import Link from "next/link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
const mainBlogData = {
  image:
    "https://wallpapers.com/images/featured/link-pictures-16mi3e7v5hxno9c4.jpg",
  subheading: "PRODUCTS UPDATES",
  heading: "Unleashing the Power of Google Reviews: The mTap NFC Solution",
  date: "June 26, 2023",
  author: "Roopak Gupta",
  authorTitle: "CEO & Founder @mTap",
};
const blogData = [
  {
    id: "1",
    image:
      "https://st3.depositphotos.com/3591429/13269/i/450/depositphotos_132694218-stock-photo-woman-writing-notes-in-diary.jpg",
    subheading: "PRODUCTS UPDATES",
    heading: "Unleashing the Power of Google Reviews: The mTap NFC Solution",
    avatar:
      "https://alumni.cusat.ac.in/wp-content/themes/cera/assets/images/avatars/user-avatar.png",
    author: "Roopak Gupta",
    authorTitle: "CEO & Founder @mTap",
  },
  {
    id: "2",
    image:
      "https://st3.depositphotos.com/3591429/13269/i/450/depositphotos_132694218-stock-photo-woman-writing-notes-in-diary.jpg",
    subheading: "NETWORKING TIPS",
    heading: "Exploring the Future of NFC Technology",
    avatar:
      "https://alumni.cusat.ac.in/wp-content/themes/cera/assets/images/avatars/user-avatar.png",
    author: "Jane Doe",
    authorTitle: "CTO @TechWorld",
  },
  {
    id: "3",
    image:
      "https://st3.depositphotos.com/3591429/13269/i/450/depositphotos_132694218-stock-photo-woman-writing-notes-in-diary.jpg",
    subheading: "PRODUCTS UPDATES",
    heading: "The Rise of Contactless Payments",
    avatar:
      "https://alumni.cusat.ac.in/wp-content/themes/cera/assets/images/avatars/user-avatar.png",
    author: "John Smith",
    authorTitle: "Lead Developer @FinTech",
  },
  {
    id: "4",
    image:
      "https://st3.depositphotos.com/3591429/13269/i/450/depositphotos_132694218-stock-photo-woman-writing-notes-in-diary.jpg",
    subheading: "NEWS & EVENTS",
    heading: "The Rise of Contactless Payments",
    avatar:
      "https://alumni.cusat.ac.in/wp-content/themes/cera/assets/images/avatars/user-avatar.png",
    author: "John Smith",
    authorTitle: "Lead Developer @FinTech",
  },
  {
    id: "5",
    image:
      "https://st3.depositphotos.com/3591429/13269/i/450/depositphotos_132694218-stock-photo-woman-writing-notes-in-diary.jpg",
    subheading: "USE CASES",
    heading: "The Rise of Contactless Payments",
    avatar:
      "https://alumni.cusat.ac.in/wp-content/themes/cera/assets/images/avatars/user-avatar.png",
    author: "John Smith",
    authorTitle: "Lead Developer @FinTech",
  },
];
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
const Blog = () => {
  return (
    <div style={{ marginTop: "12rem", width: "100%" }}>
      <div>
        <h1
          className="googleReviewCardsHeading"
          style={{
            fontSize: "80px",
            fontWeight: "900",
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          Blog
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Card
          sx={{
            display: "flex",
            marginBottom: "6rem",
            height: "60vh",
            borderRadius: 20,
            width: "70%",
            overflow: "auto",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: "40%" }}
            image="https://wallpapers.com/images/featured/link-pictures-16mi3e7v5hxno9c4.jpg"
            alt="blog image"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                variant="h5"
                sx={{
                  display: "inline-block",
                  backgroundColor: "black",
                  color: "white",
                  marginTop: "2rem",
                  fontWeight: "600",
                  border: "8px solid transparent",
                }}
              >
                Products Updates
              </Typography>

              <Typography
                variant="h3"
                color="text.secondary"
                component="div"
                sx={{
                  color: "black",
                  marginTop: "4rem",
                  fontWeight: "600",
                  width: "60%",
                }}
              >
                Unleashing the Power of Google Reviews: The mTap NFC Solution
              </Typography>
            </CardContent>
            <CardActions>
              <Typography
                variant="subtitle3"
                color="text.secondary"
                sx={{ marginBottom: "1rem" }}
              >
                {" "}
                June 26, 2023 <br /> By: Roopak Gupta
              </Typography>
            </CardActions>
          </Box>
        </Card>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(350px, 1fr))",
            gap: "2rem",
            justifyContent: "center",
            width: "70%",
            margin: "0 auto",
          }}
        >
          {blogData.map((blog, index) => (
            <Card
              key={index}
              variant="plain"
              sx={{
                height: "70vh",
                width: "100%",
                overflow: "auto",
                marginBottom: "2rem",
                borderRadius: 20,
              }}
            >
              <CardMedia
                component="img"
                alt="blog"
                image={blog.image}
                sx={{ maxHeight: 350 }}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        display: "inline-block",
                        backgroundColor: getBackgroundColor(blog.subheading),
                        color:
                          blog.subheading === "NEWS & EVENTS"
                            ? "black"
                            : "white",
                        fontWeight: "600",
                        border: "8px solid transparent",
                      }}
                    >
                      {blog.subheading}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      26 january 2023
                    </Typography>
                  </Box>

                  <Link
                    key={index}
                    className="linkBlog"
                    href={{
                      pathname: "/blogDetails",
                      query: {
                        heading: blog.heading,
                        subheading: blog.subheading,
                        image: blog.image,
                        author: blog.author,
                        authorTitle: blog.authorTitle,
                        avatar:blog.avatar
                        // Add any other data you want to pass
                      },
                    }}
                    passHref
                  >
                    <Typography
                      variant="h4"
                      color="text.secondary"
                      component="div"
                      sx={{
                        color: "black",
                        marginTop: "2rem",
                        fontWeight: "600",
                      }}
                    >
                      {blog.heading}
                    </Typography>
                  </Link>
                </CardContent>
              </Box>
              <CardActions sx={{ marginLeft: "2rem", gap: "1rem" }}>
                <Avatar
                  alt={blog.author}
                  src={blog.avatar}
                  sx={{ width: 70, height: 70 }}
                />
                <Typography variant="subtitle3" color="text.secondary">
                  By: {blog.author} <br />
                  {blog.authorTitle}
                </Typography>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
