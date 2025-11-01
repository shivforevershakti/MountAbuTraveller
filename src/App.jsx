import { Helmet, HelmetProvider } from "react-helmet-async";
import BannerSection from "./component/BannerSection";
import BookingSection from "./component/BookingSection";
import Footer from "./component/FooterSection";
import Header from "./component/Header";
import ImageSection from "./component/ImageSection";
import ImageSlider from "./component/ImageSlider";
import PopularRoutes from "./component/PopularRotes";
import ServicesSection from "./component/ServiceSection";
import WhyChooseUsSection from "./component/WhyChooseUsSection";
import "./index.css";

export const App = () => {
    return (
        <HelmetProvider>
            <>
                {/* 🔹 SEO Metadata */}
                <Helmet>
                    <title>Mount Abu Travel Guide | Top Routes, Attractions & Hotels</title>
                    <meta
                        name="description"
                        content="Plan your Mount Abu trip with detailed routes, tourist attractions, hotels, and Ambaji temple guide. Explore Rajasthan’s only hill station with our travel planner."
                    />
                    <meta
                        name="keywords"
                        content="Mount Abu travel, Mount Abu tourist places, Ambaji temple, Mount Abu routes, Mount Abu hotels, Nakki Lake, Guru Shikhar, Mount Abu tourism"
                    />
                    <meta property="og:title" content="Mount Abu Travel Guide" />
                    <meta
                        property="og:description"
                        content="Explore Mount Abu – top attractions, tourist spots, and travel routes. Perfect guide for your next Rajasthan trip!"
                    />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://yourdomain.com/" />
                    <meta property="og:image" content="/images/mount-abu-banner.webp" />
                    <link rel="canonical" href="https://yourdomain.com/" />
                </Helmet>

                {/* 🔹 Page Structure */}
                <Header />
                <main className="w-full h-full">
                    <ImageSlider />
                    <BookingSection />
                    <BannerSection />
                    <ServicesSection />
                    <ImageSection />
                    <BookingSection />
                    <WhyChooseUsSection />
                    <PopularRoutes />
                </main>
                <Footer />

            </>
        </HelmetProvider>
    );
};
