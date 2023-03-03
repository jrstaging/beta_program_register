<?php

class className extends JobRouter\Engine\Runtime\PhpFunction\RuleConditionFunction
{
	public function execute($rowId = null)
	{
        $this->getTableValue("test");
	}
}
?>