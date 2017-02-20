<?php
session_start();

$poId=$_REQUEST['poId'];
$_SESSION['poId']=$poId;
