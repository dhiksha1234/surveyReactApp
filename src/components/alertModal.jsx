function AlertModal({allAnsweredPerPage,setAllAnsweredPerPage}) {

    return(
        <>
        { allAnsweredPerPage &&
        <div className="alert alert-danger mx-5 d-flex justify-content-between" role="alert">
        Please complete all the questions in the form to continue
        <button type="button" class="btn-close" aria-label="Close" data-dismiss="modal" onClick={()=>{ setAllAnsweredPerPage(false)
            console.log("ge ge ge ge genius",allAnsweredPerPage) }}></button>
        </div> 
        }
        </>
    )

}

export default AlertModal;