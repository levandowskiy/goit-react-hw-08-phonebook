
import { ListItem, Btn } from './ContactList.styled';
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/operations";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/operations";
import { selectFilteredContacts } from "../../redux/selectors"


export function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul>
        {filteredContacts.map(({ id, name, phone }) => (
          <ListItem key={id}>
            <p>
              {name}: <span>{phone}</span>
            </p>
            <Btn onClick={() => dispatch(deleteContact(id))}>Delete</Btn>
          </ListItem>
        ))}
      </ul>
    </>
  );
};



