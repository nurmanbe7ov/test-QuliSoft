import React, { useEffect } from "react";
import { useProductContext } from "../../Context/ProductContextProvider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const Get = () => {
  const { getPhotos, photos } = useProductContext();

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div className="container">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{ fontSize: "20px", fontWeight: "bold" }}
                align="left"
              >
                Name
              </TableCell>
              <TableCell
                style={{ fontSize: "20px", fontWeight: "bold" }}
                align="center"
              >
                Description
              </TableCell>
              <TableCell
                style={{ fontSize: "20px", fontWeight: "bold" }}
                align="right"
              >
                Image
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {photos.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell style={{ fontSize: "20px" }} align="left">
                  {item.user.name}
                </TableCell>
                <TableCell style={{ fontSize: "20px" }} align="center">
                  {item.description}
                </TableCell>

                <TableCell
                  //   component={Link}
                  //   to={`detail/${item.id}`}
                  align="right"
                >
                  <img
                    style={{ cursor: "pointer" }}
                    width="30%"
                    src={item.urls.small}
                    alt=""
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Get;
