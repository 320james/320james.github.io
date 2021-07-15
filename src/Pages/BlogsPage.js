import React from 'react';
import blogs from '../data/blogs';
import Title from '../Components/Title';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';


function BlogsPage() {
    return (
        <MainLayout>
            <BlogsStyled>
                <Title title={'Blogs'} span={'Blogs'} />
                <InnerLayout className={'blog'}>
                    {
                        blogs.map((blog) => {

                            return <div key={blog.id} className={'blog-item'}>
                                <div className="image">
                                    <a href={blog.link}>
                                        <img src={blog.image} alt="" />
                                    </a>
                                </div>
                                <div className="title">
                                    <a href={blog.link}>
                                        {blog.title}
                                    </a>
                                </div>
                            </div>
                        })
                    }
                </InnerLayout>
            </BlogsStyled>

        </MainLayout>
    );
}

const BlogsStyled = styled.div`
    @media screen and (max-width: 500px) {
        margin-top: 4rem;
    }
    .blog {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        grid-row-gap: 3rem;
        
        
        @media screen and (max-width: 770px) {
            grid-template-columns: repeat(1, 1fr);
        }
        
        .blog-item {
            background-color: var(--background-dark-grey);   
            padding-left: 1rem;
            padding-right: 1rem;
            padding-top: 1rem;
            padding-bottom: 3.5rem;
            overflow: hidden;
            box-shadow: 4px 4px 5px rgba(0,0,0, .4);
            
        }
        .image {
            width: 100%;
            height: 100%;
            border-left: 4px solid var(--border-color);
            border-right: 4px solid var(--border-color);
            border-top: 4px solid var(--border-color);
            border-bottom: 4px solid var(--border-color);
            padding-bottom: 0.5rem;

            
            transition: all .4s ease-in-out;
            &:hover {
                cursor: pointer;
                transform: rotate(1.5deg) scale(1.03);
            }
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                
            }
            
        }
        .title {
            padding: .8rem 0;
            line-height: .8;
            a {
                font-size: 0.9rem;
                color: var(--white-color);
                cursor: pointer;
                transition: all .4s ease-in-out;
                &:hover {
                    color: var(--primary-color);
                }
            }
        }
    }

`;

export default BlogsPage;