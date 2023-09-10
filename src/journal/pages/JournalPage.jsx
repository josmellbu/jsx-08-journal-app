import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/journalLayout"
import { NothingSelectedView } from "../views/NothingSelectedView"
import { NoteView } from "../views/NoteView"
import { AddOutlined } from "@mui/icons-material"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deleniti laudantium, minus esse eius hic expedita beatae ea ratione rem, sapiente culpa. Soluta pariatur ipsum rerum accusantium praesentium eligendi nulla.</Typography> */}
      <NothingSelectedView />
      {/* <NoteView /> */}
      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }}/>
      </IconButton>
    </JournalLayout>
  )
}
