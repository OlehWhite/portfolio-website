import { CONTENTFUL_KEYS } from "../../pages/contentfulKeys";
import { Aside, Img, ImgLink, Ul, Li, Link } from "./style";
import IMGMe from "../../assets/icons/me.jpg";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

type TContact = {
  link: string;
  img: string;
};

const ID_CONTENT = "contactInformations";

export const Me = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [contacts, setContacts] = useState<TContact[]>([]);
  const location = useLocation();

  console.log(location.pathname);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 200);
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/${CONTENTFUL_KEYS.spaces}/entries?content_type=${ID_CONTENT}&access_token=${CONTENTFUL_KEYS.access_token}`
      )
      .then((res) => {
        setContacts([]);
        if (res.data.items.length > 0) {
          const promises = res.data.items.map((contact: any) => {
            const link = contact.fields.link;
            const idImg = contact.fields.img.sys.id;

            return axios
              .get(
                `https://cdn.contentful.com/spaces/${CONTENTFUL_KEYS.spaces}/assets/${idImg}?access_token=${CONTENTFUL_KEYS.access_token}`
              )
              .then((res) => {
                return {
                  img: res.data.fields.file.url,
                  link,
                };
              });
          });

          Promise.all(promises)
            .then((newContacts) => {
              setContacts(newContacts);
            })
            .catch((error) => {
              console.log("Error fetching contact info:", error);
            });
        }
      })
      .catch((error) => {
        console.log("Error fetching contact info:", error);
      });
  }, []);

  return (
    <Aside
      className={
        isLoaded && location.pathname !== "/projects" ? "fade-in" : "fade-out"
      }
    >
      <div>
        <Img src={IMGMe} alt="Bilostotskyi Oleh" title="Bilostotskyi Oleh" />
      </div>
      <div>
        <Ul>
          {contacts.map(({ img, link }, index) => (
            <Link key={index} href={link} target="_blank">
              <Li>
                <ImgLink src={img} alt={link} />
              </Li>
            </Link>
          ))}
        </Ul>
      </div>
    </Aside>
  );
};
