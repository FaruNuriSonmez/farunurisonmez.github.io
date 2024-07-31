import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getPagesUnderRoute } from 'nextra/context';

const POSTS_PER_PAGE = 5;

export function BlogHeader() {
    return (
        <div className="max-w-screen-lg mx-auto pt-4 pb-8 mb-16 border-b border-gray-400 border-opacity-20">
            <h1>
                <span className="font-bold leading-tight lg:text-5xl">Teknoloji Günlükleri</span>
            </h1>
            <p className="italic text-center text-gray-500 dark:text-gray-400 font-space-grotesk">
                Çeşitli teknoloji konuları ve eğitimlerle ilgili bilgiler için teknik bloglarımı okuyun.
            </p>
        </div>
    );
}

export function BlogIndex() {
    const allPages = getPagesUnderRoute('/blogs');
    const [currentPage, setCurrentPage] = useState(1);
    const [displayedPages, setDisplayedPages] = useState([]);
    
    useEffect(() => {
        const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
        const endIndex = startIndex + POSTS_PER_PAGE;
        //@ts-ignore
        setDisplayedPages(allPages.slice(startIndex, endIndex));
    }, [currentPage, allPages]);

    const totalPages = Math.ceil(allPages.length / POSTS_PER_PAGE);

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    return (
        <div>
            {displayedPages.map(page => (
                //@ts-ignore
                <div key={page.route} className="mb-10">

                    <Link href={
                        //@ts-ignore
                        page.route
                    } className="block font-semibold mt-8 text-2xl">
                        {
                            //@ts-ignore
                            page.meta?.title || page.frontMatter?.title || page.name}
                    </Link>
                    <p className="opacity-80" style={{ marginTop: '.5rem' }}>
                        {
                            //@ts-ignore
                            page.frontMatter?.description}{' '}
                        <span className="inline-block">
                            <Link href={
                                //@ts-ignore
                                page.route}>{'Read more →'}</Link>
                        </span>
                    </p>
                    {
                        //@ts-ignore
                        page.frontMatter?.date && (
                            <p className="opacity-50 text-sm">{
                                //@ts-ignore
                                page.frontMatter.date
                            }</p>
                        )}
                </div>
            ))}
            <div className="flex justify-between mt-8">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
                >
                    Önceki
                </button>
                <span className="px-4 py-2">
                    Sayfa {currentPage} / {totalPages}
                </span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
                >
                    Sonraki
                </button>
            </div>
        </div>
    );
}
