import React, { Fragment } from "react";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { green, red } from "@mui/material/colors";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso } from 'react-virtuoso';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { grey } from "@mui/material/colors";

const Transaction = () => {
    const TableHeader = ['No', 'Property Address', 'Date Submitted', 'Days Pending', 'Document Name / Remarks', 'Status', 'Action Required']
    const TableData = [
        { 
            id: 1,
            address: '101 BLOCK 101, BISHAN STREER 12 ##13 S570101',
            date: '18/04/2023',
            pending: 97,
            name: 'CDD Checklist/Salesperson\'s Checklist on CDD',
            status: 'Pending Document Approval'
        },
        {
            id: 1,
            address: '101 BLOCK 101, BISHAN STREER 12 ##13 S570101',
            date: '18/04/2023',
            pending: 97,
            name: 'CDD Checklist/Salesperson\'s Checklist on CDD',
            status: 'Pending Document Approval'
        },
        {
            id: 1,
            address: '101 BLOCK 101, BISHAN STREER 12 ##13 S570101',
            date: '18/04/2023',
            pending: 97,
            name: 'CDD Checklist/Salesperson\'s Checklist on CDD',
            status: 'Pending Document Approval'
        },
        {
            id: 1,
            address: '101 BLOCK 101, BISHAN STREER 12 ##13 S570101',
            date: '18/04/2023',
            pending: 97,
            name: 'CDD Checklist/Salesperson\'s Checklist on CDD',
            status: 'Pending Document Approval'
        },
        {
            id: 1,
            address: '101 BLOCK 101, BISHAN STREER 12 ##13 S570101',
            date: '18/04/2023',
            pending: 97,
            name: 'CDD Checklist/Salesperson\'s Checklist on CDD',
            status: 'Pending Document Approval'
        },
    ]
    

      const VirtuosoTableComponents = {
        Scroller: React.forwardRef((props, ref) => (
          <TableContainer component={Paper} {...props} ref={ref} />
        )),
        Table: (props) => (
          <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
        ),
        TableHead,
        TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
        TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
      };
      
      function fixedHeaderContent() {
        return (
          <TableRow className="bg-[#0162E8] text-sm font-semibold">
            {TableHeader.map((column, index) => (
              <TableCell
                className= {index === 0 ? 'w-12 text-white' : 'text-white'}
                align={index !== 0 ? 'center' : ''}
              >
                {column}
              </TableCell>
            ))}
          </TableRow>
        );
      }
      
      function rowContent(_index, row) {
        console.log(_index);
        return (
          <React.Fragment>
            
            {/* {TableData.map((column, index) => ( */}
                <>
                    <TableCell>
                        {row.id}
                    </TableCell>
                    <TableCell align="center">
                        {row.address}
                    </TableCell>
                    <TableCell align="center">
                        {row.date}
                    </TableCell>
                    <TableCell align="center">
                        {row.pending}
                    </TableCell>
                    <TableCell align="center">
                        {row.name}
                    </TableCell>
                    <TableCell align="center">
                        {row.status}
                    </TableCell>
                    <TableCell align="center">
                        <button className="flex items-center bg-[#09BCFF] px-4 py-2 text-white rounded-lg">
                            <FileDownloadOutlinedIcon/>
                            Upload Document
                        </button>
                    </TableCell>
                    
              </>
            {/* ))} */}
          </React.Fragment>
        );
      }
  return (
    <Fragment>
      <div className='dashboard-link px-8 my-4 flex item-center '>
        <HomeOutlinedIcon sx={{ color: grey[500] }}/>
        <ChevronRightOutlinedIcon sx={{ color: grey[500] }}/>
        <span>Performance Report</span>
        <ChevronRightOutlinedIcon sx={{ color: grey[500] }}/>
        <span>Top Recruiters</span>
      </div>
      <div className="transaction mx-8 mt-5 py-4 shadow-2xl">
        <h3 className="flex items-center gap-4 p-4 border-b-[1px] border-gray-400">
          <ChecklistOutlinedIcon />
          <span className="font-bold text-xl">Transaction</span>
        </h3>
        <div className="p-4 mt-6 flex justify-between">
          <div className="search flex gap-2 items-center border-[1.5px] border-slate-600 rounded-3xl p-2">
            <SearchIcon />
            <input
              className="w-[370px] bg-[#121212] outline-none"
              type="text"
              placeholder="Search by Name, Manager & Phone No."
            />
          </div>
          <button className="outline outline-neutral-400 outline-1 rounded-lg px-4 py-1 flex gap-4 items-center">
            <CalendarTodayOutlinedIcon />
            <span>Date</span>
            <ReplayOutlinedIcon sx={{ color: green[500] }} />
          </button>
        </div>
        <div className="flex gap-2 items-center px-4 mt-4">
          <StickyNote2OutlinedIcon sx={{ color: red[500] }} />
          <span className="text-sm">
            You have{" "}
            <span className="text-red-500">0 Pending Document Submission</span>{" "}
            that require immediate action and{" "}
            <span className="text-red-500">3 Pending Document</span> For Approval
          </span>
        </div>
        <div className="my-6 w-full overflow-x-auto px-4">
          <Paper style={{ height: 550, width: '110%' }}>
          <TableVirtuoso
              data={TableData}
              components={VirtuosoTableComponents}
              fixedHeaderContent={fixedHeaderContent}
              itemContent={rowContent}
          />
          </Paper>
        </div>
        <div className="pagination flex items-center justify-center my-12">
          <Stack spacing={2}>
              <Pagination count={10} shape="rounded" />
          </Stack>
        </div>
      </div>
    </Fragment>
  );
};

export default Transaction;
