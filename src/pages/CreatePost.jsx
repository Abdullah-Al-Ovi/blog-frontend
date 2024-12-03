import { Alert, Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CreatePost() {
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('content', formData.content);
      formDataToSend.append('username', currentUser?.username);
      formDataToSend.append('email', currentUser?.email);
      if (file) {
        formDataToSend.append('image', file);
      }

      const res = await fetch("/api/post/create", {
        method: "POST",
        body: formDataToSend,
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      if (res.ok) {
        setPublishError(null);
        navigate(`/post/${data.slug}`);
      }
    } catch (error) {
      setPublishError("Something went wrong");
    }
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a post</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <Select
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option value="uncategorized">Select a category</option>
            <option value="health-fitness">Health & Fitness</option>
            <option value="technology">Technology</option>
            <option value="personal-development">Personal Development</option>
            <option value="mental-health">Mental Health</option>
            <option value="travel">Travel</option>
            <option value="food-recipes">Food & Recipes</option>
            <option value="fashion">Fashion</option>
            <option value="beauty-skincare">Beauty & Skincare</option>
            <option value="home-decor">Home Decor</option>
            <option value="parenting">Parenting</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="seo">SEO</option>
            <option value="social-media-marketing">
              Social Media Marketing
            </option>
            <option value="ecommerce">E-commerce</option>
            <option value="productivity">Productivity</option>
            <option value="personal-finance">Personal Finance</option>
            <option value="investing">Investing</option>
            <option value="cryptocurrency">Cryptocurrency</option>
            <option value="real-estate">Real Estate</option>
            <option value="movies-tv">Movies & TV Shows</option>
            <option value="music">Music</option>
            <option value="gaming">Gaming</option>
            <option value="celebrity-news">Celebrity News</option>
            <option value="book-reviews">Book Reviews</option>
            <option value="events-festivals">Events & Festivals</option>
            <option value="news-politics">News & Politics</option>
            <option value="current-affairs">Current Affairs</option>
            <option value="opinion">Opinion</option>
            <option value="tutorials">Tutorials</option>
            <option value="how-to-guides">How-to Guides</option>
            <option value="interviews">Interviews</option>
            <option value="case-studies">Case Studies</option>
            <option value="product-reviews">Product Reviews</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        {formData.image && (
          <img
            src={formData.image}
            alt="upload"
            className="w-full h-72 object-cover"
          />
        )}
        <ReactQuill
          theme="snow"
          placeholder="Write something..."
          className="h-72 mb-12"
          required
          onChange={(value) => {
            setFormData({ ...formData, content: value });
          }}
        />
        <Button type="submit" gradientDuoTone="purpleToPink">
          Publish
        </Button>
        {publishError && (
          <Alert className="mt-5" color="failure">
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
}
