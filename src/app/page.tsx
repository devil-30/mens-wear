"use client";
import { useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import "./commen.scss";
import Link from "next/link";
import { RiShirtFill } from "react-icons/ri";
import { IoShirt } from "react-icons/io5";
import { BsWatch } from "react-icons/bs";
import { GiRunningShoe } from "react-icons/gi";
import { Col, Row } from "react-bootstrap";
import { Badge, Button, Card, Group, Image, Tabs, Text } from "@mantine/core";
import Footer from "@/layouts/Footer/Footer";

const slidebaroffer = [
  {
    image: "/assets/offers/1.jpg",
    alt: "offer1",
  },
  {
    image: "/assets/offers/2.jpeg",
    alt: "offer2",
  },
  {
    image: "/assets/offers/1.jpg",
    alt: "offer3",
  },
];

const productlistname = [
  {
    name: "T-Shirts",
    href: "",
    icon: <IoShirt />,
  },
  {
    name: "Shirts",
    href: "",
    icon: <RiShirtFill />,
  },
  {
    name: "Watches",
    href: "",
    icon: <BsWatch />,
  },
  {
    name: "Shoes",
    href: "",
    icon: <GiRunningShoe />,
  },
];

const tshirt = [
  {
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Tshirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Tshirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Tshirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Tshirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/tshirt/1.jpeg",
    alt: "black tshirt",
    desc: "Tshirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
];

const shirt = [
  {
    image: "/assets/shirt/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/shirt/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/shirt/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/shirt/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/shirt/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
];

const watches = [
  {
    image: "/assets/watches/1.jpeg",
    alt: "Watch",
    desc: "Hublot Watch For Men",
    drs: "2499.00",
    rs: "2000.00",
  },
  {
    image: "/assets/watches/1.jpeg",
    alt: "Watch",
    desc: "Hublot Watch For Men",
    drs: "2499.00",
    rs: "2000.00",
  },
  {
    image: "/assets/watches/1.jpeg",
    alt: "Watch",
    desc: "Hublot Watch For Men",
    drs: "2499.00",
    rs: "2000.00",
  },
  {
    image: "/assets/watches/1.jpeg",
    alt: "Watch",
    desc: "Hublot Watch For Men",
    drs: "2499.00",
    rs: "2000.00",
  },
  {
    image: "/assets/watches/1.jpeg",
    alt: "Watch",
    desc: "Hublot Watch For Men",
    drs: "2499.00",
    rs: "2000.00",
  },
];

const shoes = [
  {
    image: "/assets/shoes/1.jpeg",
    alt: "Shoes",
    desc: " Shoes For Men",
    drs: "2499.00",
    rs: "2000.00",
  },
  {
    image: "/assets/shoes/1.jpeg",
    alt: "Shoes",
    desc: " Shoes For Men",
    drs: "2499.00",
    rs: "2000.00",
  },
  {
    image: "/assets/shoes/1.jpeg",
    alt: "Shoes",
    desc: " Shoes For Men",
    drs: "2499.00",
    rs: "2000.00",
  },
  {
    image: "/assets/shoes/1.jpeg",
    alt: "Shoes",
    desc: " Shoes For Men",
    drs: "2499.00",
    rs: "2000.00",
  },
  {
    image: "/assets/shoes/1.jpeg",
    alt: "Shoes",
    desc: " Shoes For Men",
    drs: "2499.00",
    rs: "2000.00",
  },
];

const newcollectons = [
  {
    image: "/assets/newcollection/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/newcollection/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/newcollection/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/newcollection/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/newcollection/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/newcollection/1.jpeg",
    alt: "black tshirt",
    desc: "Shirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
];

const tranding = [
  {
    image: "/assets/tranding/1.jpg",
    alt: "brown tshirt",
    desc: "Shirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/tranding/1.jpg",
    alt: "brown tshirt",
    desc: "T-Shirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/tranding/1.jpg",
    alt: "brown tshirt",
    desc: "T-Shirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/tranding/1.jpg",
    alt: "brown tshirt",
    desc: "T-Shirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/tranding/1.jpg",
    alt: "brown tshirt",
    desc: "T-Shirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
  {
    image: "/assets/tranding/1.jpg",
    alt: "brown tshirt",
    desc: "T-Shirt For Men",
    drs: "799.00",
    rs: "499.00",
  },
];

export default function MensWearHomePage() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <div className="mainbody">
      <div className="my-2">
        <Carousel
          loop
          maw={1300}
          mx="auto"
          withIndicators
          height={400}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          {slidebaroffer.map((items: any, index) => (
            <Carousel.Slide key={index}>
              <img className="offer" src={items.image} alt={items.alt} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>

      <div>
        <div className="newcollecton mx-4">New Collections</div>
        <hr className="hr" />
      </div>
      <div className="  flex justify-center items-center">
        <div className=" w-5/6 flex flex-wrap justify-start items-center mt-3 ">
          {newcollectons.map((ns: any, index) => (
            <div className="mb-4 mx-2">
              <Card
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                style={{ backgroundColor: "#900c3f" }}
              >
                <Card.Section>
                  <div className="flex justify-center pt-3">
                    <img src={ns.image} alt={ns.alt} className="images" />
                  </div>
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                  <Text className="txtclr" weight={500}>
                    {ns.desc}
                  </Text>
                  <Badge className="bdgclr" variant="light">
                    On Sale
                  </Badge>
                </Group>

                <Text size="sm" color="dimmed">
                  <del className="delclr">Rs. {ns.drs} /-</del>
                </Text>
                <Text className="txtclr" size="sm">
                  Rs. {ns.rs} /-
                </Text>

                <div className="flex">
                  <div className="mx-2">
                    <Button
                      variant="light"
                      className="btnclr"
                      mt="md"
                      radius="md"
                    >
                      Buy Now
                    </Button>
                  </div>
                  <div>
                    <Button
                      variant="light"
                      className="btnclr"
                      mt="md"
                      radius="md"
                    >
                      Add Cart
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center">
          <Button className="seemorebtn" radius="xl">
            See More...
          </Button>
        </div>
      </div>

      <div>
        <div className="newcollecton mx-4 ">Tranding in WebSite</div>
        <hr className="hr" />
      </div>
      <div className="  flex justify-center items-center">
        <div className=" w-5/6 flex flex-wrap justify-start items-center mt-3 ">
          {tranding.map((tr: any, index) => (
            <div className="mb-4 mx-2">
              <Card
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                style={{ backgroundColor: "#900c3f" }}
              >
                <Card.Section>
                  <div className="flex justify-center pt-3">
                    <img src={tr.image} alt={tr.alt} className="images" />
                  </div>
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                  <Text className="txtclr" weight={500}>
                    {tr.desc}
                  </Text>
                  <Badge className="bdgclr" variant="light">
                    On Sale
                  </Badge>
                </Group>

                <Text size="sm" color="dimmed">
                  <del className="delclr">Rs. {tr.drs} /-</del>
                </Text>
                <Text className="txtclr" size="sm">
                  Rs. {tr.rs} /-
                </Text>

                <div className="flex">
                  <div className="mx-2">
                    <Button
                      variant="light"
                      className="btnclr"
                      mt="md"
                      radius="md"
                    >
                      Buy Now
                    </Button>
                  </div>
                  <div>
                    <Button
                      variant="light"
                      className="btnclr"
                      mt="md"
                      radius="md"
                    >
                      Add Cart
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center">
          <Button className="seemorebtn" radius="xl">
            See More...
          </Button>
        </div>
      </div>

      <div className="product  my-6 ">
        <Tabs
          color="dark"
          orientation="horizontal"
          variant="pills"
          radius="xl"
          defaultValue="T-Shirts"
        >
          <div className="productlist my-2">
            {productlistname.map((prname: any, index) => (
              <Tabs.List className="productlistname mx-2">
                <Tabs.Tab
                  style={{ backgroundColor: "#d7a0b5", color: "#900c3f" }}
                  className="productlistnameicon"
                  value={prname.name}
                  icon={prname.icon}
                >
                  {prname.name}
                </Tabs.Tab>
              </Tabs.List>
            ))}
          </div>
          <hr className="hr" />
          <div className="flex justify-center items-center my-4">
            <div className="productsss w-5/6">
              <div className="flex flex-wrap justify-start items-center mt-3 mb-4 ">
                {tshirt.map((tst: any, index) => (
                  <Tabs.Panel value="T-Shirts" pt="xs" className="mx-2">
                    <Card
                      shadow="sm"
                      padding="lg"
                      radius="md"
                      withBorder
                      style={{ backgroundColor: "#900c3f" }}
                    >
                      <Card.Section>
                        <div className="flex justify-center pt-3">
                          <img
                            src={tst.image}
                            alt={tst.alt}
                            className="images"
                          />
                        </div>
                      </Card.Section>

                      <Group position="apart" mt="md" mb="xs">
                        <Text className="txtclr" weight={500}>
                          {tst.desc}
                        </Text>
                        <Badge className="bdgclr" variant="light">
                          On Sale
                        </Badge>
                      </Group>

                      <Text size="sm" color="dimmed">
                        <del className="delclr">Rs. {tst.drs} /-</del>
                      </Text>
                      <Text className="txtclr" size="sm">
                        Rs. {tst.rs} /-
                      </Text>

                      <div className="flex">
                        <div className="mx-2">
                          <Button
                            variant="light"
                            className="btnclr"
                            mt="md"
                            radius="md"
                          >
                            Buy Now
                          </Button>
                        </div>
                        <div>
                          <Button
                            variant="light"
                            className="btnclr"
                            mt="md"
                            radius="md"
                          >
                            Add Cart
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </Tabs.Panel>
                ))}

                {shirt.map((sht: any, index) => (
                  <Tabs.Panel value="Shirts" pt="xs" className="mx-2">
                    <Card
                      shadow="sm"
                      padding="lg"
                      radius="md"
                      withBorder
                      style={{ backgroundColor: "#900c3f" }}
                    >
                      <Card.Section>
                        <div className="flex justify-center pt-3">
                          <img
                            src={sht.image}
                            alt={sht.alt}
                            className="images"
                          />
                        </div>
                      </Card.Section>

                      <Group position="apart" mt="md" mb="xs">
                        <Text className="txtclr" weight={500}>
                          {sht.desc}
                        </Text>
                        <Badge className="bdgclr" variant="light">
                          On Sale
                        </Badge>
                      </Group>

                      <Text size="sm" color="dimmed">
                        <del className="delclr">Rs. {sht.drs} /-</del>
                      </Text>
                      <Text className="txtclr" size="sm">
                        Rs. {sht.rs} /-
                      </Text>

                      <div className="flex">
                        <div className="mx-2">
                          <Button
                            variant="light"
                            className="btnclr"
                            mt="md"
                            radius="md"
                          >
                            Buy Now
                          </Button>
                        </div>
                        <div>
                          <Button
                            variant="light"
                            className="btnclr"
                            mt="md"
                            radius="md"
                          >
                            Add Cart
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </Tabs.Panel>
                ))}

                {watches.map((wtch: any, index) => (
                  <Tabs.Panel value="Watches" pt="xs" className="mx-2">
                    <Card
                      shadow="sm"
                      padding="lg"
                      radius="md"
                      withBorder
                      style={{ backgroundColor: "#900c3f" }}
                    >
                      <Card.Section>
                        <div className="flex justify-center pt-3">
                          <img
                            src={wtch.image}
                            alt={wtch.alt}
                            className="images"
                          />
                        </div>
                      </Card.Section>

                      <Group position="apart" mt="md" mb="xs">
                        <Text className="txtclr" weight={500}>
                          {wtch.desc}
                        </Text>
                        <Badge className="bdgclr" variant="light">
                          On Sale
                        </Badge>
                      </Group>

                      <Text size="sm" color="dimmed">
                        <del className="delclr">Rs. {wtch.drs} /-</del>
                      </Text>
                      <Text className="txtclr" size="sm">
                        Rs. {wtch.rs} /-
                      </Text>

                      <div className="flex">
                        <div className="mx-2">
                          <Button
                            variant="light"
                            className="btnclr"
                            mt="md"
                            radius="md"
                          >
                            Buy Now
                          </Button>
                        </div>
                        <div>
                          <Button
                            variant="light"
                            className="btnclr"
                            mt="md"
                            radius="md"
                          >
                            Add Cart
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </Tabs.Panel>
                ))}

                {shoes.map((shoe: any, index) => (
                  <Tabs.Panel value="Shoes" pt="xs" className="mx-2">
                    <Card
                      shadow="sm"
                      padding="lg"
                      radius="md"
                      withBorder
                      style={{ backgroundColor: "#900c3f" }}
                    >
                      <Card.Section>
                        <div className="flex justify-center pt-3">
                          <img
                            src={shoe.image}
                            alt={shoe.alt}
                            className="images"
                          />
                        </div>
                      </Card.Section>

                      <Group position="apart" mt="md" mb="xs">
                        <Text className="txtclr" weight={500}>
                          {shoe.desc}
                        </Text>
                        <Badge className="bdgclr" variant="light">
                          On Sale
                        </Badge>
                      </Group>

                      <Text size="sm" color="dimmed">
                        <del className="delclr">Rs. {shoe.drs} /-</del>
                      </Text>
                      <Text className="txtclr" size="sm">
                        Rs. {shoe.rs} /-
                      </Text>

                      <div className="flex">
                        <div className="mx-2">
                          <Button
                            variant="light"
                            className="btnclr"
                            mt="md"
                            radius="md"
                          >
                            Buy Now
                          </Button>
                        </div>
                        <div>
                          <Button
                            variant="light"
                            className="btnclr"
                            mt="md"
                            radius="md"
                          >
                            Add Cart
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </Tabs.Panel>
                ))}
              </div>
            </div>
            <div className="mt-6 flex items-center">
              <Button className="seemorebtn" radius="xl">
                See More...
              </Button>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
