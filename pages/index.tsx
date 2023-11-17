import React, { useEffect, useState } from 'react';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

import Navbar from '@/components/Navbar';
import useMovieList from '@/hooks/useMovieList';
import useFavorites from '@/hooks/useFavorites';
import useInfoModalStore from '@/hooks/useInfoModalStore';
import HeroHome from '@/components/HeroHome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDoorOpen,
  faCircleStop,
  faTabletAlt,
  faTags
} from "@fortawesome/free-solid-svg-icons";
import Footer from '@/components/Footer';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/browse',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

const Home = () => {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  const {isOpen, closeModal} = useInfoModalStore();
  const [tabItems, setTabItems] = useState<NodeListOf<Element>>();
  const [tabContentItems, setTabContentItems] = useState<NodeListOf<Element>>();
  // Select tab content item
  function selectItem(this: HTMLElement | null) {
    // Remove all show and border classes
    removeBorder();
    removeShow();
    // Add border to current tab item
    this?.classList?.add('tab-border');
    // Grab content item from DOM
    const tabContentItem= document.querySelector(`#${this?.id}-content`);
    // Add show class
    tabContentItem?.classList?.add('show');
  }

  // Remove bottom borders from all tab items
  function removeBorder() {
    tabItems?.forEach?.((item: any) => {
      item.classList.remove('tab-border');
    });
  }

  // Remove show class from all content items
  function removeShow() {
    tabContentItems?.forEach(item => {
      item.classList.remove('show');
    });
  }

  // Listen for tab item click
  tabItems?.forEach(item => {
    item.addEventListener('click', selectItem);
  });

  useEffect(()=>{
    setTabItems(document?.querySelectorAll('.tab-item'));
    setTabContentItems(document?.querySelectorAll('.tab-content-item'));
  },[]);


  return (
    <>
      <Navbar showMenu={false} />
      <HeroHome />
      <section className="tabs">
			<div className="container">
				<div id="tab-1" className="tab-item tab-border">
          <FontAwesomeIcon icon={faDoorOpen}  size="3x"/>
					<p className="hide-sm">Cancel at any time</p>
				</div>
				<div id="tab-2" className="tab-item">
          <FontAwesomeIcon icon={faTabletAlt}  size="3x"/>
					<p className="hide-sm">Watch anywhere</p>
				</div>
				<div id="tab-3" className="tab-item">
          <FontAwesomeIcon icon={faTags}  size="3x"/>
					<p className="hide-sm">Pick your price</p>
				</div>
			</div>
		</section>

		<section className="tab-content">
			<div className="container">
				{/* Tab Content 1 */}
				<div id="tab-1-content" className="tab-content-item show">
					<div className="tab-1-content-inner">
						<div>
							<p className="text-lg">
								If you decide Netflix isn't for you - no problem. No commitment.
								Cancel online anytime.
							</p>
							<a href="#" className="btn btn-lg">Watch Free For 30 Days</a>
						</div>
						<img src="https://i.ibb.co/J2xDJV7/tab-content-1.png" alt="" />
					</div>
				</div>

				{/* Tab Content 2 */}
				<div id="tab-2-content" className="tab-content-item">
					<div className="tab-2-content-top">
						<p className="text-lg">
							Watch TV shows and movies anytime, anywhere — personalized for
							you.
						</p>
						<a href="#" className="btn btn-lg">Watch Free For 30 Days</a>
					</div>
					<div className="tab-2-content-bottom">
						<div>
							<img src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png" alt="" />
							<p className="text-md">
								Watch on your TV
							</p>
							<p className="text-dark">
								Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
								players and more.
							</p>
						</div>
						<div>
							<img src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png" alt="" />
							<p className="text-md">
								Watch instantly or download for later
							</p>
							<p className="text-dark">
								Available on phone and tablet, wherever you go.
							</p>
						</div>
						<div>
							<img src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png" alt="" />
							<p className="text-md">
								Use any computer
							</p>
							<p className="text-dark">
								Watch right on Netflix.com.
							</p>
						</div>
					</div>
				</div>

				{/* Tab Content 3 */}
				<div id="tab-3-content" className="tab-content-item">
					<div className="text-center">
						<p className="text-lg">
							Choose one plan and watch everything on Netflix.
						</p>
						<a href="#" className="btn btn-lg">Watch Free For 30 Days</a>
					</div>

					<table className="table">
						<thead>
							<tr>
								<th></th>
								<th>Basic</th>
								<th>Standard</th>
								<th>Premium</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Monthly price after free month ends on 6/19/19</td>
								<td>$8.99</td>
								<td>$12.99</td>
								<td>$15.99</td>
							</tr>
							<tr>
								<td>HD Available</td>
								<td><i className="fas fa-times"></i></td>
								<td><i className="fas fa-check"></i></td>
								<td><i className="fas fa-check"></i></td>
							</tr>
							<tr>
								<td>Ultra HD Available</td>
								<td><i className="fas fa-times"></i></td>
								<td><i className="fas fa-times"></i></td>
								<td><i className="fas fa-check"></i></td>
							</tr>
							<tr>
								<td>Screens you can watch on at the same time</td>
								<td>1</td>
								<td>2</td>
								<td>4</td>
							</tr>
							<tr>
								<td>Watch on your laptop, TV, phone and tablet</td>
								<td><i className="fas fa-check"></i></td>
								<td><i className="fas fa-check"></i></td>
								<td><i className="fas fa-check"></i></td>
							</tr>
							<tr>
								<td>Unlimited movies and TV shows</td>
								<td><i className="fas fa-check"></i></td>
								<td><i className="fas fa-check"></i></td>
								<td><i className="fas fa-check"></i></td>
							</tr>
							<tr>
								<td>Cancel anytime</td>
								<td><i className="fas fa-check"></i></td>
								<td><i className="fas fa-check"></i></td>
								<td><i className="fas fa-check"></i></td>
							</tr>
							<tr>
								<td>First month free</td>
								<td><i className="fas fa-check"></i></td>
								<td><i className="fas fa-check"></i></td>
								<td><i className="fas fa-check"></i></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
    <Footer />
    </>
  )
}

export default Home;
