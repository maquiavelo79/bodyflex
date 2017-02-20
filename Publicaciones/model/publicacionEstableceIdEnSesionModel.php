<?php
session_start();
$pId=$_REQUEST['pId'];
$_SESSION['pId']=$pId;
