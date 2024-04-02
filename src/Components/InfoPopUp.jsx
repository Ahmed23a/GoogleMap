import { InfoWindow } from "@react-google-maps/api";
import { Card, Col, Row } from "antd";
export default function InfoPopUp({ selectedPolygon, setIsOpen }) {
  return (
    <>
      <InfoWindow
        position={{
          lat: selectedPolygon.current.center().lat + 0.3,
          lng: selectedPolygon.current.center().lng,
        }}
        onCloseClick={() => setIsOpen(false)}
      >
        <>
          <Card
            title={`This is ${selectedPolygon.current.name}`}
            bordered={false}
            style={{ width: 300 }}
          >
            <Row>
              <Col span={3} style={{ marginRight: "0.4rem" }}>
                <img src={selectedPolygon.current.icon} />
              </Col>
              <Col span={20}>{selectedPolygon.current.info}</Col>
            </Row>
          </Card>
        </>
      </InfoWindow>
    </>
  );
}
