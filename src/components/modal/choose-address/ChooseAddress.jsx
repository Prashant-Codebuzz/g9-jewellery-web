import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';

// Image
// Light
import HomeLight from "../../../assets/images/account/home-light.svg";
import WorkLight from "../../../assets/images/account/work-light.svg";
import OtherLight from "../../../assets/images/account/other-light.svg";

const ChooseAddress = ({ show, handleClose, handleSelectAddress }) => {

    const [selectedId, setSelectedId] = useState(null);

    const handleSelect = (i) => {
        setSelectedId(i.id)
        handleSelectAddress(i);
        handleClose();
    };

    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
        >
            <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>

            <Modal.Body>
                <h4 className='d-flex justify-content-center'>Choose Address</h4>

                <form>
                    {/* <div className="address">
                        <div className='title d-flex align-items-center'>
                            <img src={userAddress?.address_type === 'Home' ? HomeLight : userAddress?.address_type === 'Work' ? WorkLight : OtherLight} alt="" className='img-fluid me-3' draggable={false} />
                            <img src={HomeLight} alt="" className='img-fluid me-3' draggable={false} />

                            Home
                        </div>

                        <p>
                            123, Shyamdham Soc, Nana Varachha <br />
                            Surat, Gujarat, India - 395006
                        </p>
                    </div>

                    <div className="address">
                        <div className='title d-flex align-items-center'>
                            <img src={WorkLight} alt="" className='img-fluid me-3' draggable={false} />

                            Work
                        </div>

                        <p>
                            306, Dhara Arcade, Mota Varachha <br />
                            Surat, Gujarat, India - 395006
                        </p>
                    </div>

                    <div className="address">
                        <div className='title d-flex align-items-center'>
                            <img src={OtherLight} alt="" className='img-fluid me-3' draggable={false} />

                            Other
                        </div>

                        <p>
                            789, Light House, Udhana Darwaja <br />
                            Surat, Gujarat, India - 395006
                        </p>
                    </div> */}

                    {
                        AddressData?.map((i, index) => {
                            return (
                                <div
                                    key={index}
                                    className="address"
                                    // className={`address d-flex align-items-start mb-3 p-2 border rounded ${selectedId === i.id ? "border-primary" : "border-secondary"}`}
                                    onClick={() => handleSelect(i)}
                                >
                                    <div className='title d-flex align-items-center'>
                                        <img src={i.image} alt="" className='img-fluid me-3' draggable={false} />

                                        {i.type}
                                    </div>

                                    <p>
                                        {i.address}
                                    </p>
                                </div>
                            )
                        })
                    }
                </form>

            </Modal.Body>
        </Modal>
    )
}

export default ChooseAddress;




const AddressData = [
    {
        id: 1,
        type: "Home",
        image: HomeLight,
        address: "123, Shyamdham Soc, Nana Varachha, Surat, Gujarat, India - 395006",
    },
    {
        id: 2,
        type: "Work",
        image: WorkLight,
        address: "306, Dhara Arcade, Mota Varachha, Surat, Gujarat, India - 395006",
    },
    {
        id: 3,
        type: "Other",
        image: OtherLight,
        address: "789, Light House, Udhana Darwaja, Surat, Gujarat, India - 395006",
    },
];
