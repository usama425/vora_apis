import React, { useState, useEffect } from 'react'
import Base1 from '../Base1'
import axios from '../../Reuseables/AxiosConfig'
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from 'react-router-dom';

const CulturalTag = () => {
    const [search, setSearch] = useState('')
    const [isBookListOpen, setIsBookListOpen] = useState(true);
    const [currPageBook, setCurrPageBook] = useState(1)
    const [lastPageBook, setLastPageBook] = useState(2)
    const [loading, setLoading] = useState(false)
    const [moreBooks, setMoreBooks] = useState(true)
    const [moreMovies, setMoreMovies] = useState(true)
    const [currPageMovie, setCurrPageMovie] = useState(1)
    const [lastPageMovie, setLastPageMovie] = useState(2)

    const [bookList, setBookList] = useState([])
    const [movieList, setMovieList] = useState([])
    const navigate = useNavigate();

    const setReset = () => {
        setCurrPageBook(1);
        setLastPageBook(1);
        setCurrPageMovie(1);
        setLastPageMovie(1);
        setBookList([])
        setMovieList([])
    }

    const onSearch = (e) => {
        setReset()
        setSearch(e.target.value)
    }

    const setListView = () => {
        setIsBookListOpen(!isBookListOpen);
    }

    const handleClickBook = (book) => {
        navigate('/post', { state: book })
    }
    const handleClickMovie = (movie) => {
        navigate('/post', { state: movie })
    }

    const fetchMoreBooks = () => {
        console.log('fetchmorebooks:');
        if (currPageBook + 1 <= lastPageBook) {
            setCurrPageBook(currPageBook + 1)
        } else {
            setMoreBooks(false)
        }
    }
    const fetchMoreMovies = () => {
        console.log('fetchmorebooks:');
        if (currPageMovie + 1 <= lastPageMovie) {
            setCurrPageMovie(currPageMovie + 1)
        } else {
            setMoreMovies(false)
        }
    }

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            axios.get(`/api/naver_search?query=${search !== '' ? search : 'book'}& display=20 & start=${currPageMovie} & genre=1 & `)
                .then(res => {
                    console.log(res)
                    let list = movieList;
                    res.data.data.items.forEach((movie) => {
                        list.push(movie)
                    })
                    console.log('list', list)
                    setMovieList(list)
                    setLastPageMovie(res.data.data.total)
                    setLoading(false)
                }).catch(err => {
                    console.log(err)
                    alert(err.response.message)
                })
        }, 500);
    }, [currPageMovie, search])

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            axios.get(`/api/kyobobook_search?query=${search !== '' ? search : 'book'}&page=${currPageBook}&page_size=20`)
                .then(res => {
                    console.log(res)
                    let list = bookList;
                    res.data.data.books.forEach((book) => {
                        list.push(book)
                    })
                    console.log('list', list)
                    setBookList(list)
                    setLastPageBook(res.data.data.last_page)
                    setLoading(false)
                }).catch(err => {
                    console.log(err)
                    alert(err.response.message)
                })
        }, 500);
    }, [currPageBook, search])

    return (
        <Base1 name="문화태그" BackLink="/post">
            <div className="con pt-2 bg-white" style={{ minHeight: "calc(100vh - 50px)", marginTop: "50px" }}>
                <input
                    type="text"
                    name="search"
                    value={search}
                    className="form-control mx-auto my-3"
                    style={{ border: '1px solid #A02A95', width: "90%" }}
                    placeholder={"Enter the book name and author"}
                    onChange={(e) => onSearch(e)}
                    onBlur={(e) => {
                        console.log(e)
                    }}
                />
                <hr style={{ height: "10px", backgroundColor: "#F5F5F5", width: "100%", border: "none" }} />
                <div>
                    <div className='mx-auto d-flex justify-content-around' style={{ gap: "20px", width: "90%" }}>
                        <p className='mb-0 px-4 py-2' onClick={setListView} style={{
                            backgroundColor: `${isBookListOpen ? '#A02A95' : 'white'}`,
                            borderRadius: "20px", cursor: "pointer",
                            color: `${isBookListOpen ? 'white' : 'black'}`,
                        }}>Book</p>
                        <p className='mb-0 px-4 py-2' onClick={setListView} style={{
                            backgroundColor: `${!isBookListOpen ? '#A02A95' : 'white'}`,
                            color: `${!isBookListOpen ? 'white' : 'black'}`,
                            borderRadius: "20px", cursor: "pointer",
                        }}> Movie</p>
                    </div>

                    {isBookListOpen ?
                        <InfiniteScroll
                            dataLength={bookList.length}
                            next={fetchMoreBooks}
                            hasMore={moreBooks}
                            loader={<h5 className='d-flex justify-content-center'>Loading...</h5>}
                        >
                            {bookList.length !== 0 && bookList.map((book, index) => (
                                <BookListItem key={index} book={book} onClick={handleClickBook} />
                            ))}
                        </InfiniteScroll>
                        :
                        <InfiniteScroll
                            dataLength={movieList.length}
                            next={fetchMoreMovies}
                            hasMore="true"
                            loader={<h5 className='d-flex justify-content-center'>Loading...</h5>}
                        >
                            {movieList.length !== 0 && movieList.map((movie, index) => (
                                <MovieListItem key={index} movie={movie} onClick={handleClickMovie} />
                            ))}
                        </InfiniteScroll>
                    }
                </div>
            </div>
        </Base1>
    )
}
export default CulturalTag;

function MovieListItem({ movie, onClick }) {
    return (
        <div className='d-flex mx-auto my-3'
            style={{
                height: "120px", width: "90%", overflow: "hidden",
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.08)",
                borderRadius: "8px", gap: "10px"
            }}
            onClick={() => onClick(movie)}
        >
            <img src={movie.image} alt="photo" style={{ flexBasis: "30%", objectFit: "cover" }} />
            <div className='d-flex flex-column justify-content-center'
                style={{ flexBasis: "70%", gap: "15px" }} >
                <p className='mb-0 text-bold'
                    style={{ fontWeight: "500", fontSize: "20px" }}>{movie.title} </p>
                <p className='mb-0 text-bold'
                    style={{ fontWeight: "400", fontSize: "16px" }}>Appearance:{movie.director}</p>
            </div>
        </div>
    );
}

function BookListItem({ book, onClick }) {
    return (
        <>
            <div className='d-flex mx-auto my-3'
                style={{
                    height: "120px", width: "90%", overflow: "hidden",
                    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.08)",
                    borderRadius: "8px", gap: "10px"
                }}
                onClick={() => onClick(book)}
            >
                <img src={book.image_url} alt="photo" style={{ flexBasis: "30%", objectFit: "cover" }} />
                <div className='d-flex flex-column justify-content-center' style={{ flexBasis: "70%", gap: "15px" }} >
                    <p className='mb-0 text-bold'
                        style={{ fontWeight: "500", fontSize: "20px" }}>{book.name}</p>
                    <p className='mb-0 text-bold'
                        style={{ fontWeight: "400", fontSize: "16px" }}>{book.author}
                        <span className='ml-3'>{book.publisher}</span></p>
                </div>
            </div>
        </>
    );
}
