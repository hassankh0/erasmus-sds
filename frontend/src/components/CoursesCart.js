import React, { useEffect } from 'react'
import { useState } from 'react'
import * as coursServices from "../services/coursServices"
import CartItem from './CartItem'
import LearningAgreement from './PDFPages/PDFPages'

const ShopingCart = () => {
  const [courses, setCourses] = useState([]);
  const [total, setTotal] = useState(0);

  const fetchCourses = async () => {
    const data = await coursServices.getCoursesOfStudent();
    setCourses(data);
    let t = 0;
    data.map(d => t += d.credits);
    setTotal(t);

  }

  useEffect(() => {
    fetchCourses();
    console.log(courses);
  }, []);

  return (

    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-4">
              {courses.map((cours) => <><CartItem key={Math.random} cours={cours} fetchCourses={fetchCourses} /></>)}
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">


                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>{total} ECTS</dd>
                  </div>
                </dl>



                <div className="flex justify-end">
                  <a
                    href="#"
                    className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                  >
                    <LearningAgreement />
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}




export default ShopingCart