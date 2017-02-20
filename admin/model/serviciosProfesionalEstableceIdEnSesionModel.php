<?php
session_start();
$spId=$_REQUEST['spId'];
$_SESSION['spId']=$spId;
