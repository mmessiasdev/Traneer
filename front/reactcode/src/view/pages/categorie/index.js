import { useEffect, useState } from "react";
import DefaultTitle from "../../components/title"
import axios from "axios";
import ThumbCard from "../../components/thumbcard";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "../../components/footer";



const CategoriePage = () => {
    const token = localStorage.getItem('authToken');
    const { id } = useParams();


    const [courses, setCourses] = useState(null)
    const [categorie, setCategorie] = useState(null)


    useEffect(() => {
        const fetchCategorie = async () => {
            try {
                const categorieResponse = await axios.get(`${process.env.REACT_APP_BASEURL}/api/categories/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                const categorieData = categorieResponse.data.data;
                setCategorie(categorieData);
            }
            catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        }
        fetchCategorie();
    }, [token])



    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const coursesResponse = await axios.get(`${process.env.REACT_APP_BASEURL}/api/categories/${id}?populate=courses`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                const coursesData = coursesResponse.data.data.attributes.courses.data;
                setCourses(coursesData);
            }
            catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        }
        fetchCourses();
    }, [token])



    return <>

        {
            categorie ? (
                <div>
                    {
                        categorie.attributes.banner ? (
                            <Box height="300px" overflow="hidden" sx={{ opacity: "50%" }}>
                                <img src={categorie.attributes.banner} />
                            </Box>

                        ) : <></>
                    }
                    <Box sx={{ padding: { md: "0px 150px 50px 150px", xs: "15px 10px" } }}>

                        <DefaultTitle text={categorie.attributes.name} />
                    </Box>



                </div>
            ) : <div></div>
        }
        <Box sx={{ padding: { md: "50px 150px", xs: "15px 10px" } }}>
            {
                courses ? (
                    <>
                        {courses.map(item => (
                            <div>
                                {
                                    item.attributes.thumb ? (
                                        <ThumbCard linkto={item.id} thumburl={courses ? item.attributes.thumb : ""} title={item.attributes.title} />

                                    ) : <></>
                                }
                            </div>
                        ))}
                    </>
                ) : <div></div>
            }

        </Box>
        <Footer/>

    </>
}

export default CategoriePage;