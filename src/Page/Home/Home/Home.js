import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blogs/Blog';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Product from '../Products/Product/Product';
import UserReview from '../UserReview/UserReview';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Product></Product>
            <UserReview></UserReview>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;