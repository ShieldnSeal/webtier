"use client"
import React from 'react';
import Link from 'next/link';

interface BlogGridMainProps {
    Slug: string;
    blogImage: string;
    blogTitle?: string;
    blogDate?: string;
}

const BlogGridMain: React.FC<BlogGridMainProps> = ({
    Slug,
    blogImage,
    blogTitle,
    blogDate
}) => {
    return (
        <>
            <a href={`/blog/${Slug}`} className="thumbnail">
                <img src={`assets/images/blog/${blogImage}`} alt="blog-area" />
            </a>
            <div className="inner-content-body">
                <div className="tag-area">
                    <div className="single">
                        <i className="fa-light fa-clock" />
                        <span>{blogDate}</span>
                    </div>
                </div>
                <a className="title-main" href={`/blog/${Slug}`}>
                    <h3 className="title animated fadeIn">
                        {blogTitle ? blogTitle : 'How to growing your business'}
                    </h3>
                </a>
                <div className="button-area">
                    <a
                        href={`/blog/${Slug}`}
                        className="rts-btn btn-primary radious-sm with-icon"
                    >
                        <div className="btn-text">Read Details</div>
                        <div className="arrow-icon">
                            <i className="fa-solid fa-circle-plus" />
                        </div>
                        <div className="arrow-icon">
                            <i className="fa-solid fa-circle-plus" />
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
};

export default BlogGridMain;
